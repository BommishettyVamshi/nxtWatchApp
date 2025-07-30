import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Gaming from './pages/Gaming'
import Trending from './pages/Trending'
import SavedVideos from './pages/SavedVideos'
import VideoItemDetails from './pages/VideoItemDetails'
import NotFound from './pages/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/videos/:id" component={VideoItemDetails} />
    <Route exact path="/trending" component={Trending} />
    <Route exact path="/gaming" component={Gaming} />
    <Route exact path="/saved-videos" component={SavedVideos} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
