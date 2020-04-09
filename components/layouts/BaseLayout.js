import React from "react"
import Header from "../shared/Header"
import Head from "next/head"

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props
    const headerType = props.headerType || "default"
    const title = props.title || "Bryant Patton Portfolio"
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="My name is Bryant Patton and I am an experienced software engineer and freelance developer."
                />
                <meta
                    name="keywords"
                    content="bryant portfolio, bryant developer, bryant freelancig, bryant programming"
                />
                <meta property="og:title" content="Bryant Patton - programmer, developer" />
                <meta property="og:locale" content="en_EU" />
                <meta property="og:url" content={`${process.env.BASE_URL}`} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="My name is Bryant Patton and I am an experienced software engineer and freelance developer."
                />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
                {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`} />}
                <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/static/favicon/site.webmanifest" />
            </Head>
            <div className="layout-container">
                <Header
                    className={`port-nav-${headerType}`}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    isSiteOwner={isSiteOwner}
                />
                <main className={`cover ${className}`}>
                    <div className="wrapper">{children}</div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default BaseLayout
