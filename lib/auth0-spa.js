import * as React from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'
import { useRouter } from 'next/router'

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname)

export const Auth0Context = React.createContext(null)
export const useAuth0 = () => React.useContext(Auth0Context)

export const Auth0Provider = ({
  children,
  // onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
}) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState()
  const [isOwner, setIsOwner] = React.useState(true)
  const [user, setUser] = React.useState()
  const [auth0Client, setAuth0] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const [popupOpen, setPopupOpen] = React.useState(false)
  const router = useRouter()
  const onRedirectCallback = (appState) => {
    console.log('appState', appState)

    router.push(appState && appState.targetUrl ? appState.targetUrl : '/')
  }
  React.useEffect(() => {
    let browserUri = undefined
    // window is accessible here.
    browserUri = window.location.origin + '/callback'

    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client({
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID,
        redirect_uri: browserUri,
      })
      setAuth0(auth0FromHook)

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback()
        onRedirectCallback(appState)
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated()

      setIsAuthenticated(isAuthenticated)

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser()
        setUser(user)
      }

      setLoading(false)
    }

    initAuth0()
  }, [])

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true)
    try {
      await auth0Client.loginWithPopup(params)
    } catch (error) {
      console.error(error)
    } finally {
      setPopupOpen(false)
    }
    const user = await auth0Client.getUser()
    setUser(user)
    setIsAuthenticated(true)
  }

  const handleRedirectCallback = async () => {
    setLoading(true)
    await auth0Client.handleRedirectCallback()
    const user = await auth0Client.getUser()
    setLoading(false)
    setIsAuthenticated(true)
    setUser(user)
  }

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        isOwner,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  )
}

export const requireUser = (page) => {
  return (props) => {
    const router = useRouter()
    const { loading, isAuthenticated, loginWithRedirect } = useAuth0()

    React.useEffect(() => {
      if (loading || isAuthenticated) {
        return
      }

      const fn = async () => {
        await loginWithRedirect({
          appState: { targetUrl: router.asPath },
        })
      }
      fn()
    }, [loading, isAuthenticated, loginWithRedirect, router.pathname])

    if (loading || !isAuthenticated) {
      return null
    }

    return React.createElement(page, props)
  }
}
