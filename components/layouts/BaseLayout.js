import React from 'react'
import Header from '../shared/Header'
import { UserProvider } from '../../lib/user'

export default ({
  className,
  user,
  loading = false,
  isSiteOwner = false,
  children,
}) => {
  return (
    <UserProvider value={{ user, loading }}>
      <div className="layout-container">
        <Header
          className={`port-nav-default`}
          loading={loading}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        {children}
      </div>
    </UserProvider>
  )
}
