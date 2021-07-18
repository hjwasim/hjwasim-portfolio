import { Route } from 'react-router-dom'
import './App.css'
import Profile from './pages/Profile'

const App = () => {

  return (
    <>
      <Route path="/" component={Profile} />
    </>
  )
}

export default App
