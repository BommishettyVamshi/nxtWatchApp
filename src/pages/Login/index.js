import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {NxtWatchContext} from '../../context/NxtWatchContext'
import {setToken, isAuthenticated} from '../../utils/auth'
import {apiStatusConstants} from '../../utils/constants'

import {loginUser} from '../../services/apiServices'

import {
  LoginMainContainer,
  LoginSubContainer,
  LoginFormContainer,
  InputAndLabelContainer,
  InputField,
  LabelField,
  CheckBoxField,
  ShowPasswordContainer,
  CustomButton,
  WebsiteLogoImage,
  Para,
  CustomContainer,
  ShowPasswordLabel,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  login = async event => {
    const {username, password} = this.state
    event.preventDefault()

    this.setState({
      showErrorMsg: false,
      errorMsg: '',
    })

    const loginResult = await loginUser(username, password)
    const {apiStatus, data} = loginResult
    if (apiStatus === apiStatusConstants.success) {
      setToken(data)
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        showErrorMsg: true,
        errorMsg: data,
      })
    }
  }

  render() {
    const {username, password, showErrorMsg} = this.state
    const {showPassword, errorMsg} = this.state
    if (isAuthenticated()) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isThemeDark} = value
          const websiteLogoUrl = isThemeDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const passwordInputType = showPassword ? 'text' : 'password'

          return (
            <LoginMainContainer isThemeDark={isThemeDark}>
              <LoginSubContainer isThemeDark={isThemeDark}>
                <WebsiteLogoImage src={websiteLogoUrl} alt="website logo" />
                <LoginFormContainer onSubmit={this.login}>
                  <InputAndLabelContainer>
                    <LabelField isThemeDark={isThemeDark} htmlFor="username">
                      USERNAME
                    </LabelField>
                    <InputField
                      isThemeDark={isThemeDark}
                      id="username"
                      type="text"
                      value={username}
                      placeholder="Username"
                      onChange={this.onChangeUsername}
                    />
                  </InputAndLabelContainer>
                  <InputAndLabelContainer>
                    <LabelField isThemeDark={isThemeDark} htmlFor="password">
                      PASSWORD
                    </LabelField>
                    <InputField
                      isThemeDark={isThemeDark}
                      id="password"
                      type={passwordInputType}
                      value={password}
                      placeholder="Password"
                      onChange={this.onChangePassword}
                    />
                  </InputAndLabelContainer>
                  <ShowPasswordContainer>
                    <CheckBoxField
                      type="checkbox"
                      id="ShowPassword"
                      Checked={showPassword}
                      onChange={this.toggleShowPassword}
                    />
                    <ShowPasswordLabel
                      isThemeDark={isThemeDark}
                      htmlFor="ShowPassword"
                    >
                      ShowPassword
                    </ShowPasswordLabel>
                  </ShowPasswordContainer>
                  <CustomContainer>
                    <CustomButton type="submit">Login</CustomButton>
                    {showErrorMsg && <Para>*{errorMsg}</Para>}
                  </CustomContainer>
                </LoginFormContainer>
              </LoginSubContainer>
            </LoginMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
