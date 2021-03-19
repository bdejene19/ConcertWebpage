import './App.css';
import HomeLandingPage from './pages/HomeLandingPage';
import Pricing from './pages/Pricing'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomeLandingPage}></Route>

          <Route exact path='/pricing' component={Pricing}></Route>

          <Route exact path='/payNow'></Route>
        </Switch>
        {/* <HomeLandingPage></HomeLandingPage> */}
        


      </Router>
      
    </div>
  );
}

export default App;
