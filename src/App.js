import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Gaming from './pages/Gaming'
import Trending from './pages/Trending'
import SavedVideos from './pages/SavedVideos'
import VideoItemDetails from './pages/VideoItemDetails'
import NotFound from './pages/NotFound'
import NxtWatchContextProvider from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
const App = () => (
  <NxtWatchContextProvider>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
      <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </NxtWatchContextProvider>
)

export default App
