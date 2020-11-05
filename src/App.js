import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return ( 
    <div>
    <Switch>
      <Route  exact path="/" component={HomePage} />
      <Route  path="/hats" component={HatsPage} />
    </Switch>

    
    </div>
  );
}

export default App;
