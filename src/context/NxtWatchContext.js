import React, {Component} from 'react'

export const NxtWatchContext = React.createContext({
  isThemeDark: false,
  savedVideosList: [],
  addToSavedVideosList: () => {},
  removeFromSavedVideosList: () => {},
  changeTheme: () => {},
})

class NxtWatchContextProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isThemeDark: false,
      savedVideosList: [],
    }
  }

  addToSavedVideosList = newVideo => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, newVideo],
    }))
  }

  removeFromSavedVideosList = videoId => {
    this.setState(prevState => ({
      savedVideosList: prevState.savedVideosList.filter(
        each => each.id !== videoId,
      ),
    }))
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isThemeDark: !prevState.isThemeDark,
    }))
  }

  render() {
    const {isThemeDark, savedVideosList} = this.state
    const {children} = this.props

    return (
      <NxtWatchContext.Provider
        value={{
          isThemeDark,
          savedVideosList,
          addToSavedVideosList: this.addToSavedVideosList,
          removeFromSavedVideosList: this.removeFromSavedVideosList,
          changeTheme: this.changeTheme,
        }}
      >
        {children}
      </NxtWatchContext.Provider>
    )
  }
}

export default NxtWatchContextProvider
