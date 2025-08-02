import Cookies from 'js-cookie'

const JWTTOKEN = 'jwt_token'

export const setToken = jwtToken =>
  Cookies.set(JWTTOKEN, jwtToken, {expires: 30})

export const getToken = () => Cookies.get(JWTTOKEN)
export const removeToken = () => Cookies.remove(JWTTOKEN)
export const isAuthenticated = () => !!getToken()
