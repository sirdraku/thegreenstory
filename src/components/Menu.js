import React, { useState }  from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "./UniversalLink"
import { func } from "prop-types"



const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
            childItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  const [isActive, setActive] = useState(true);
  
  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    
    <nav className={isActive ? "inactive" : "active"} >
      <ul className="primary-menu reset-list-style">
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          const itemId = "menu-item-" + menuItem.databaseId

          return (
            <li
              id={itemId}
              key={i + menuItem.url}
              className={
                "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
                itemId
              }
            >

              <UniversalLink
                to={path}
                activeClassName={"current-menu-item current_page_item"}
              >
                {menuItem.label}
              </UniversalLink>

              {menuItem.childItems.nodes.length > 0 &&
                <ul className="submenu">
                    { menuItem.childItems.nodes.map((childItem, ci) => 
                    
                    <li key={ci}> 
                      <UniversalLink
                          to={childItem.url}
                        >
                           {childItem.label}
                           
                        </UniversalLink>
                     </li>
                    
                    )}
                </ul> 
              }
            </li>
          )
        })}
      </ul>
      
      <div className="togglebutton" onClick={() => setActive(!isActive)}>
        <span></span>
      </div>
     
    </nav>
  )
}

export default Menu
