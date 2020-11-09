import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state= {
      currentUser: null
    }
  }
  // unsubscribeFromAuth will tell us the whether user is logged in or not.
  unsubscribeFromAuth = null; 
  componentDidMount() {
    // this will tell firebase whether the user has logged in from google or not.
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user)
  })
}
  componentWillUnmount() {
    //  if the user has logged out, then we will change the unsubscribeFromAuth here.
    this.unsubscribeFromAuth();

  }
  render() {
    return ( 
      <div>
      <Header currentUser={this.state.currentUser }/>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
        <Route  path="/signin" component={SignInAndSignUpPage} />
      </Switch>
  
      
      </div>
    )
    
  }
  
}

export default App;
