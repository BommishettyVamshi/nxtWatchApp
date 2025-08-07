import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BiX} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import Header from '../../components/Header'
import NavigationSideBar from '../../components/NavigationSideBar'
import {NxtWatchContext} from '../../context/NxtWatchContext'
import VideoCard from '../../components/VideoCard'
import {
  MainContainer,
  SubContainer,
  HomeVideosContainer,
  BannerContainer,
  BannerSubContainer,
  BannerContentContainer,
  GetItNowButton,
  CrossCloseButton,
  NxtWatchLogo,
  BannerText,
  VideosContainer,
  VideosCardList,
  SearchInputContainer,
  SearchBar,
  HrBar,
  SearchIconCard,
  LoaderContainer,
} from './styledComponents'
import {getVideos} from '../../services/apiServices'
import {apiStatusConstants} from '../../utils/constants'

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    width: window.innerWidth,
    searchInput: '',
    videos: [],
    errorMsg: '',
    isBannerClosed: true,
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth)
    this.getHomeVideos()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  updateWindowWidth = () => {
    this.setState({width: window.innerWidth})
  }

  getHomeVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {searchInput} = this.state
    const result = await getVideos(searchInput)
    const {status, data} = result
    if (status === apiStatusConstants.success) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        videos: data,
      })
    } else if (status === apiStatusConstants.noVideos) {
      this.setState({
        apiStatus: apiStatusConstants.noVideos,
        errorMsg: data,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
        errorMsg: data,
      })
    }
  }

  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  getSearchResults = () => {
    this.getHomeVideos()
  }

  toggleBanner = () => {
    this.setState(prevState => ({
      isBannerClosed: !prevState.isBannerClosed,
    }))
  }

  render() {
    const {
      width,
      apiStatus,
      searchInput,
      videos,
      errorMsg,
      isBannerClosed,
    } = this.state

    console.log(apiStatus, searchInput, videos, errorMsg)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeDark} = value

          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isThemeDark ? '#ffffff' : '#3b82f6'}
                height="50"
                width="50"
              />
            </LoaderContainer>
          )

          const renderBannerView = () => (
            <BannerContainer data-testid="banner">
              <BannerSubContainer>
                <BannerContentContainer>
                  <NxtWatchLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <BannerText>
                    Buy Nxt Watch Premimum prepaid plans with UPI
                  </BannerText>
                </BannerContentContainer>
                <GetItNowButton type="button">GET IT NOW</GetItNowButton>
              </BannerSubContainer>
              <CrossCloseButton
                type="button"
                data-testid="close"
                onClick={this.toggleBanner}
              >
                <BiX style={{fontSize: '20px', color: '#000000'}} />
              </CrossCloseButton>
            </BannerContainer>
          )

          const renderSuccessView = () => (
            <HomeVideosContainer isThemeDark={isThemeDark}>
              {isBannerClosed && renderBannerView()}
              <VideosContainer>
                {apiStatus === apiStatusConstants.inProgress && renderLoader()}
                <SearchInputContainer>
                  <SearchBar
                    type="text"
                    value={searchInput}
                    placeholder="Search"
                    onChange={this.changeSearchInput}
                    isThemeDark={isThemeDark}
                  />
                  <HrBar />
                  <SearchIconCard type="button" onClick={this.getSearchResults}>
                    <BsSearch style={{fontSize: '20px', color: '#606060'}} />
                  </SearchIconCard>
                </SearchInputContainer>
                <VideosCardList>
                  {apiStatus === apiStatusConstants.inProgress &&
                    renderLoader()}
                  {videos.map(each => (
                    <VideoCard videosList={each} key={each.id} />
                  ))}
                </VideosCardList>
              </VideosContainer>
            </HomeVideosContainer>
          )

          return (
            <MainContainer data-testid="home">
              <Header />
              <SubContainer windowWidth={width}>
                {width >= 768 && <NavigationSideBar />}
                {renderSuccessView()}
              </SubContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
