import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaMoon, FaBars} from 'react-icons/fa'
import {BiX} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {WiDaySunny} from 'react-icons/wi'
import {
  HeaderMainContainer,
  WebsiteLogo,
  CustomButton,
  HeaderDetailsList,
  LogoutButton,
  HeaderPopupContainer,
  PopupPara,
  ProfileImg,
  ThemeButton,
  PopupMenuContainer,
  PopupMenuListContainer,
  PopupMenuLinkItem,
  PopupMenuItem,
  PopupMenuItemText,
  PopupCloseContainer,
  PopupCloseButton,
  CustomButtonContainer,
} from './styledComponents'
import {removeToken} from '../../utils/auth'
import {navigationTabsList} from '../../utils/constants'
import {NxtWatchContext} from '../../context/NxtWatchContext'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: window.innerWidth,
      activeNavigationTab: navigationTabsList[0].id,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  updateWindowWidth = () => {
    this.setState({width: window.innerWidth})
  }

  logout = () => {
    removeToken()
    const {history} = this.props
    history.replace('/login')
  }

  changeActiveNavigationTab = id => {
    this.setState({
      activeNavigationTab: id,
    })
  }

  renderHeaderview = () => {
    const {width, activeNavigationTab} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeDark, changeTheme} = value
          const toggleTheme = () => {
            changeTheme()
          }
          const websiteLogoUrl = isThemeDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <HeaderMainContainer isThemeDark={isThemeDark}>
              <Link to="/">
                <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
              </Link>
              <HeaderDetailsList>
                <li key="themeImage">
                  {isThemeDark ? (
                    <ThemeButton type="button" onClick={toggleTheme}>
                      <WiDaySunny
                        style={{fontSize: '25px', color: '#ffffff'}}
                      />
                    </ThemeButton>
                  ) : (
                    <ThemeButton type="button" onClick={toggleTheme}>
                      <FaMoon style={{fontSize: '20px', color: '#0f0f0f'}} />
                    </ThemeButton>
                  )}
                </li>
                <li key="profile">
                  {width >= 768 ? (
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  ) : (
                    <Popup
                      trigger={
                        <ThemeButton type="button">
                          {isThemeDark ? (
                            <FaBars
                              style={{fontSize: '25px', color: '#ffffff'}}
                            />
                          ) : (
                            <FaBars
                              style={{fontSize: '25px', color: '#0f0f0f'}}
                            />
                          )}
                        </ThemeButton>
                      }
                      modal
                      contentStyle={{
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'white',
                        padding: '0',
                        border: 'none',
                        borderRadius: '0',
                      }}
                    >
                      {close => (
                        <PopupMenuContainer isThemeDark={isThemeDark}>
                          <PopupCloseContainer>
                            <PopupCloseButton
                              type="button"
                              onClick={() => close()}
                            >
                              {isThemeDark ? (
                                <BiX
                                  style={{fontSize: '25px', color: '#ffffff'}}
                                />
                              ) : (
                                <BiX
                                  style={{fontSize: '25px', color: '#000000'}}
                                />
                              )}
                            </PopupCloseButton>
                          </PopupCloseContainer>
                          <PopupMenuListContainer>
                            {navigationTabsList.map(each => {
                              const {id, icon: Icon, tabText, route} = each
                              const activeColor =
                                id === activeNavigationTab
                                  ? '#ff0000'
                                  : '#383838'
                              return (
                                <PopupMenuLinkItem
                                  to={route}
                                  key={id}
                                  isThemeDark={isThemeDark}
                                  isActive={id === activeNavigationTab}
                                >
                                  <PopupMenuItem
                                    onClick={() =>
                                      this.changeActiveNavigationTab(id)
                                    }
                                  >
                                    <Icon
                                      style={{
                                        fontSize: '20px',
                                        color: activeColor,
                                      }}
                                    />
                                    <PopupMenuItemText
                                      isThemeDark={isThemeDark}
                                      isActive={id === activeNavigationTab}
                                    >
                                      {tabText}
                                    </PopupMenuItemText>
                                  </PopupMenuItem>
                                </PopupMenuLinkItem>
                              )
                            })}
                          </PopupMenuListContainer>
                        </PopupMenuContainer>
                      )}
                    </Popup>
                  )}
                </li>
                <li key="logout" style={{cursor: 'pointer'}}>
                  <Popup
                    trigger={
                      width >= 768 ? (
                        <LogoutButton isThemeDark={isThemeDark}>
                          Logout
                        </LogoutButton>
                      ) : (
                        <FiLogOut
                          style={{
                            fontSize: '25px',
                            color: isThemeDark ? '#ffffff' : '#0f0f0f',
                          }}
                        />
                      )
                    }
                    modal
                  >
                    {close => (
                      <HeaderPopupContainer isThemeDark={isThemeDark}>
                        <PopupPara isThemeDark={isThemeDark}>
                          Are you sure you want logut?
                        </PopupPara>
                        <CustomButtonContainer>
                          <CustomButton
                            outline
                            borderColor={isThemeDark ? '#ffffff' : '#0f0f0f'}
                            color={isThemeDark ? '#ffffff' : '#0f0f0f'}
                            onClick={() => close()}
                          >
                            Cancel
                          </CustomButton>
                          <CustomButton
                            outline={false}
                            color="#ffffff"
                            onClick={this.logout}
                          >
                            Confirm
                          </CustomButton>
                        </CustomButtonContainer>
                      </HeaderPopupContainer>
                    )}
                  </Popup>
                </li>
              </HeaderDetailsList>
            </HeaderMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    return this.renderHeaderview()
  }
}

export default withRouter(Header)
