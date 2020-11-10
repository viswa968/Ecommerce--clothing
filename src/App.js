import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


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
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>{
          this.setState({
            // this will get us the unique numerical id for every user.
            currentUser: {
              id:snapshot.id,
              ...snapshot.data()
            }
          }); 
          console.log(this.state)
      })
    }
      // this will set the userAuth to null, when the user logs out
      else {
        this.setState({ currentUser:userAuth});
      }
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
