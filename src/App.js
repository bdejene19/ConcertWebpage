import './App.css';
import HomeLandingPage from './pages/HomeLandingPage';
import Pricing from './pages/Pricing';
import Payment from './pages/Payment';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomeLandingPage}></Route>
          <Route path='/pricing' component={Pricing}></Route>
          <Route path='/payNow' component={Payment}></Route>
        </Switch>        
      </Router>    
    </div>
  );
}

export default App;
