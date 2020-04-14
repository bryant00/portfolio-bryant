import React from 'react'
import Header from '../shared/Header'

export default ({
  className,
  isAuthenticated,
  user,
  isSiteOwner,
  children,
}) => {
  return (
    <>
      <div className="layout-container">
        <Header
          className={`port-nav-index`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        {children}
      </div>
    </>
  )
}
