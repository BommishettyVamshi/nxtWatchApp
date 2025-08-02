import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {RiSaveFill} from 'react-icons/ri'

export const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

export const baseApiUrl = 'https://apis.ccbp.in'

export const navigationTabsList = [
  {
    id: 'HOME',
    icon: AiFillHome,
    tabText: 'Home',
    route: '/',
  },
  {
    id: 'TRENDING',
    icon: MdWhatshot,
    tabText: 'Trending',
    route: '/trending',
  },
  {
    id: 'GAMING',
    icon: SiYoutubegaming,
    tabText: 'Gaming',
    route: '/gaming',
  },
  {
    id: 'SAVEDVIDEOS',
    icon: RiSaveFill,
    tabText: 'SavedVideos',
    route: '/saved-videos',
  },
]

export const backgorundThemeColors = {
  whitheThemeColor: '#f9f9f9',
  darkThemeColor: '#0f0f0f',
}
