import './App.css';
import { Route, Link } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';

function App() {

  return (
    <>
      <Link to="/login">to Login</Link>
      <Route path="/login" component={Login} />
      <br />
      <br />


      <Link to="/signup">to Signup</Link>
      <Route path="/signup" component={Signup} />
    </>
  )

}

export default App;