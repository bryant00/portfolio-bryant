import React from 'react'
import Header from '../shared/Header'
import { UserProvider } from '../../lib/user'

export default ({ user, loading = false, isSiteOwner = true, children }) => {
  return (
    <UserProvider value={{ user, loading }}>
      <div className="layout-container">
        <Header
          className={`port-nav-index`}
          loading={loading}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        {children}
      </div>
    </UserProvider>
  )
}
