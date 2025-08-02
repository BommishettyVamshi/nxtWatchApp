import {baseApiUrl, apiStatusConstants} from '../utils/constants'

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

export const Hello = 'hello'
