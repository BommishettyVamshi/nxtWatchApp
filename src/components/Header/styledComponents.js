import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 40px 10px 40px;
  background-color: ${props => (props.isThemeDark ? '#181818' : '#f9f9f9')};
`

export const WebsiteLogo = styled.img`
  height: 50%;
  width: 50%;
`

export const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
`

export const HeaderDetailsList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`

export const ThemeButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const LogoutButton = styled.button`
  padding: 8px 25px 8px 25px;
  border: 1px solid ${props => (props.isThemeDark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isThemeDark ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
`

export const HeaderPopupContainer = styled.div`
  background-color: ${props => (props.isThemeDark ? '#475569' : ' #ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px;
  border-radius: 10px;
`

export const PopupPara = styled.p`
  color: ${props => (props.isThemeDark ? '#f1f5f9' : '#4f46e5')};
  font-weight: bold;
`

export const CustomButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center:
  gap: 30px;
  background-color: transparent;
`

export const CustomButton = styled.button`
  border: ${props =>
    props.outline ? `1px solid ${props.borderColor}` : 'none'};
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  border-radius: 1px;
  padding: 10px;
  color: ${props => props.color};
  cursor: pointer;
  font-weight: bold;
`

export const PopupMenuContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isThemeDark ? '#000000' : '#ffffff')};
`

export const PopupCloseContainer = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  background-color: transparent;
`

export const PopupCloseButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
`

export const PopupMenuListContainer = styled.ul`
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  list-style-type: none;
`

export const PopupMenuLinkItem = styled(Link)`
  background-color: ${props => {
    if (props.isThemeDark) {
      return props.isActive ? '#212121' : 'transparent'
    }
    return props.isActive ? '#f1f5f9' : 'transparent'
  }};
  cursor: pointer;
  list-style-type: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 80%;
`

export const PopupMenuItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  border: none;
  cursor: pointer;
  width: 50%;
  padding: 0;
`

export const PopupMenuItemText = styled.p`
  color: ${props => (props.isThemeDark ? '#ffffff' : '#0f0f0f')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`
