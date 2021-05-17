import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./Menu"
import SiteLogo from "../assets/images/logo.jpg"

const HeaderCopy = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <header id="site-header" className="header-footer-group" role="banner">
      <div className="header-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="logo-section text-center">
                      <Link to="/" className="logo">
                          <figure className="image">
                              <img src={SiteLogo} alt="Cute Animal Planet" />
                          </figure>
                      </Link> 
                  </div>
                </div>
            </div>
            <div className="row">
               <div className="col-lg-12">
                  <div className="main-menu">
                    <Menu />
                  </div>
               </div>
            </div>
          </div>
      </div>
    </header>
  )
}

export default HeaderCopy