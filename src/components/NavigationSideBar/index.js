import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {navigationTabsList} from '../../utils/constants'
import {NxtWatchContext} from '../../context/NxtWatchContext'
import {
  SiderBarMenuContainer,
  SiderBarMenuLink,
  SideBarMenuItem,
  SideBarMenuItemTab,
  SiderBarMainContainer,
  SideBarMenuContactContainer,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsItem,
  ContactDescription,
  ContactImage,
  ContactContainer,
} from './styledComponents'

class NavigationSideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeNavigationTab: navigationTabsList[0].id,
    }
  }

  changeActiveTab = id => {
    this.setState({
      activeNavigationTab: id,
    })
  }

  render() {
    const {activeNavigationTab} = this.state

    // need ul, li, map,

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeDark} = value
          console.log(isThemeDark)

          return (
            <SiderBarMainContainer isThemeDark={isThemeDark}>
              <SiderBarMenuContainer>
                {navigationTabsList.map(each => {
                  const {id, icon: Icon, tabText, route} = each
                  const activeColor =
                    id === activeNavigationTab ? '#ff0000' : '#383838'
                  return (
                    <SiderBarMenuLink
                      to={route}
                      key={id}
                      isThemeDark={isThemeDark}
                      isactive={id === activeNavigationTab}
                      onClick={() => this.changeActiveTab(id)}
                    >
                      <SideBarMenuItem>
                        <Icon
                          style={{
                            fontSize: '20px',
                            color: activeColor,
                          }}
                        />
                        <SideBarMenuItemTab
                          isThemeDark={isThemeDark}
                          isactive={id === activeNavigationTab}
                        >
                          {tabText}
                        </SideBarMenuItemTab>
                      </SideBarMenuItem>
                    </SiderBarMenuLink>
                  )
                })}
              </SiderBarMenuContainer>
              <SideBarMenuContactContainer isThemeDark={isThemeDark}>
                <ContactContainer>
                  <ContactUsHeading isThemeDark={isThemeDark}>
                    Contact Us
                  </ContactUsHeading>
                  <ContactUsContainer>
                    <ContactUsItem>
                      <ContactImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                    </ContactUsItem>
                    <ContactUsItem>
                      <ContactImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                    </ContactUsItem>
                    <ContactUsItem>
                      <ContactImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linkedin logo"
                      />
                    </ContactUsItem>
                  </ContactUsContainer>
                  <ContactDescription isThemeDark={isThemeDark}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactDescription>
                </ContactContainer>
              </SideBarMenuContactContainer>
            </SiderBarMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(NavigationSideBar)
