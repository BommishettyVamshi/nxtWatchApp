import {baseApiUrl, apiStatusConstants} from '../utils/constants'
import {getToken} from '../utils/auth'

export const loginUser = async (username, password) => {
  try {
    const userCredentials = {username, password}
    const url = `${baseApiUrl}/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      return {
        apiStatus: apiStatusConstants.success,
        data: data.jwt_token,
      }
    }
    return {
      apiStatus: apiStatusConstants.failure,
      data: data.error_msg,
    }
  } catch (error) {
    console.log('Login API failed: ', error)
    return {
      apiStatus: apiStatusConstants.failure,
      data: error,
    }
  }
}

export const getVideos = async searchInput => {
  try {
    const jwtToken = getToken()
    const url = `${baseApiUrl}/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      if (videos.length === 0) {
        return {
          status: apiStatusConstants.noVideos,
          data: 'No Search results found',
        }
      }
      const formattedVideos = videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      return {
        status: apiStatusConstants.success,
        data: formattedVideos,
      }
    }
    return {
      status: apiStatusConstants.failure,
      data: 'Oops! Something Went Wrong',
    }
  } catch (e) {
    console.log(e)
    return {
      status: apiStatusConstants.failure,
      data: 'Oops! Something Went Wrong',
    }
  }
}

export const Hello = 'hello'
