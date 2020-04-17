import React from 'react'
import Header from '../shared/Header'
import { UserProvider, useFetchUser } from '../../lib/user'
import { ThemeContext } from '../../lib/themeContext'

function Content() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserProvider.Consumer>
          {(user) => <ProfilePage user={user} theme={theme} />}
        </UserProvider.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}
export default Content
