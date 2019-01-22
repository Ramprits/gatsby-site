import './layout.scss'
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div className="container-flud">
          <nav
            className="navbar is-info"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <Link className="navbar-item" to="https://bulma.io">
                  Saint gobain
                </Link>

                <a
                  href="/"
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <Link to="/home" className="navbar-item">
                    Home
                  </Link>

                  <Link to="/doc" className="navbar-item">
                    Documentation
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
            }}
          >
            {children}
          </div>
        </div>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
