import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SiderBarMainContainer = styled.div`
  width: 20%;
  background-color: ${props => (props.isThemeDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin: 0;
  flex-shrink: 0;
`

export const SiderBarMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  list-style-type: none;
  background-color: transparent;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const SiderBarMenuLink = styled(Link)`
  align-self: flex-start;
  background-color: ${props => {
    if (props.isThemeDark) {
      return props.isactive ? '#212121' : 'transparent'
    }
    return props.isactive ? '#f1f5f9' : 'transparent'
  }};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
`

export const SideBarMenuItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  padding-left: 20px;
  margin: 0;
  width: 100%;
`

export const SideBarMenuItemTab = styled.p`
  color: ${props => (props.isThemeDark ? '#ffffff' : '#0f0f0f')};
  font-weight: ${props => (props.isactive ? 'bold' : 'normal')};
`

export const SideBarMenuContactContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px 20px 30px 20px;
  width: 100%;
  flex-grow: 1;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactUsContainer = styled.ul`
  padding: 0;
  display: flex;
  gap: 10px;
  list-style-type: none;
  width: 100%;
  background-color: transparent;
`

export const ContactUsHeading = styled.h1`
  color: ${props => (props.isThemeDark ? '#ffffff' : '#000000')};
  font-weight: bold;
`

export const ContactUsItem = styled.li`
  list-style-type: none;
`

export const ContactImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50px;
`

export const ContactDescription = styled.p`
  color: ${props => (props.isThemeDark ? '#ffffff' : '#000000')};
  font-size: 20px;
`
