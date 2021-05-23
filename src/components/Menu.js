import React, { useState }  from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "./UniversalLink"


const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        menuItems {
          nodes {
            parentId
            label
            path
            url
            childItems {
              nodes {
                path
                label
                url
                childItems {
                  nodes {
                    path
                    label
                    url
                  }
                }
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
        {wpMenu?.menuItems?.nodes?.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url
          const itemId = "menu-item-" + menuItem?.databaseId
          return (
            <React.Fragment key={i}>
            {menuItem?.parentId === null && (
                <li
                id={itemId}
                key={i + menuItem?.url}
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
                {/* {console.log(menuItem?.childItems?.nodes.length > 0 && menuItem?.childItems?.nodes)} */}
                {menuItem?.childItems?.nodes?.length > 0 &&
                <ul className="submenu">
                {menuItem?.childItems?.nodes?.map((item, index) => (
                    <li key={index}> 
                      <UniversalLink
                        to={item?.url}
                      >
                        {item?.label}
                      </UniversalLink>
                      {item?.childItems?.nodes?.length > 0 && 
                        <ul className="submenu">
                          {item?.childItems?.nodes?.map((data, index) => (
                            <li key={index}> 
                              <UniversalLink
                              to={data?.url}
                              >
                              {data?.label}
                            </UniversalLink>
                          </li>
                          ))}
                        </ul>
                      }
                    </li>
                  ))}
                  </ul> 
                }
              </li>
            )}
            </React.Fragment>
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