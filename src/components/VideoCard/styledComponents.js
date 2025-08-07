import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkCard = styled(Link)`
  text-decoration: none;
`

export const VideoListCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 15px;
  text-decoration: none;
`

export const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 0;
  margin: 0;
`

export const ChannelLogo = styled.img`
  height: 10%;
  width: 10%;
`

export const VideoDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  gap: 10px;
`

export const Para1 = styled.p`
  color: ${props => (props.isThemeDark ? ' #f9f9f9' : '#313131')};
  padding: 0;
  margin: 0;
  font-family: Roboto;
  font-weight: 400;
`

export const Para2 = styled.p`
  color: ${props => (props.isThemeDark ? '#475569' : '#313131')};
  padding: 0;
  margin: 0;
  font-family: Roboto;
  font-weight: 400;
`

export const VideoViewsAndTimeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
