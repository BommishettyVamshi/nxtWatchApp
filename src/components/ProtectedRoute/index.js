import {Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from '../../utils/auth'

const ProtectedRoute = props => {
  if (isAuthenticated()) {
    return <Route {...props} />
  }

  return <Redirect to="/login" />
}

export default ProtectedRoute
