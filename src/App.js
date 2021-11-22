import './App.css';
import styled from 'styled-components';
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
          <PageLayout>
            <Route exact path='/' component={HomeLandingPage}></Route>
            <Route path='/pricing' component={Pricing}></Route>
            <Route path='/payNow' component={Payment}></Route>
          </PageLayout>
        </Switch>        
      </Router>    
    </div>
  );
}

const PageLayout = styled.div`
    h1 {
        font-size: 4rem;
    }

    h4 {
                  font-size: 2rem;

    }

    p {
        font-size: 2.75rem;;
    }

    .disclaimerText {
      font-size: 1.25rem;
    }

    @media screen and  (max-width: 1024px) {
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 2rem;
        }
    };

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.35rem;
        }
        
    }

    @media screen and (max-width: 430px) {
        h1 {
            font-size: 1.75rem;
        }

        p {
            font-size: 1.25rem;
        }
    }
`;

export default App;
