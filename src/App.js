import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './containers/NavBar';
import HomePage from './component/HomePage';

function App() {


  return (
    <div>
      <Navbar />
      <HomePage />
      <Route exact path="/" component={() => <h1>Homepage</h1>} />
    </div>
  )


}
export default App;