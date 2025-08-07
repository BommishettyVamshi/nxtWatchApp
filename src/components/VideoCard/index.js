import {withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {NxtWatchContext} from '../../context/NxtWatchContext'
import {
  LinkCard,
  VideoListCard,
  Thumbnail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoDetailsCard,
  Para1,
  Para2,
  VideoViewsAndTimeCard,
} from './styledComponents'

const VideoCard = props => {
  const {videosList} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videosList
  const {name, profileImageUrl} = channel
  const time = formatDistanceToNow(new Date(publishedAt))

  const renderVideoCard = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark} = value
        return (
          <LinkCard to={`/videos/${id}`}>
            <VideoListCard>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <VideoDetailsCard>
                  <Para1 isThemeDark={isThemeDark}>{title}</Para1>
                  <Para2 isThemeDark={isThemeDark}>{name}</Para2>
                  <VideoViewsAndTimeCard>
                    <Para2 isThemeDark={isThemeDark}>{viewCount} views </Para2>
                    <Para2 isThemeDark={isThemeDark}>. {time}</Para2>
                  </VideoViewsAndTimeCard>
                </VideoDetailsCard>
              </VideoDetailsContainer>
            </VideoListCard>
          </LinkCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return renderVideoCard()
}

export default withRouter(VideoCard)
