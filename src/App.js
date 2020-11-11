import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {
  // unsubscribeFromAuth will tell us the whether user is logged in or not.
  unsubscribeFromAuth = null; 
  componentDidMount() {
    const{setCurrentUser} = this.props;
    // this will tell firebase whether the user has logged in from google or not.
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot =>{
          // setCurrentUser updates the reducer with the new user.
            setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          }); 
      }
    
      // this will set the userAuth to null, when the user logs out
      
      setCurrentUser( userAuth);
      
  })
}
  componentWillUnmount() {
    //  if the user has logged out, then we will change the unsubscribeFromAuth here.
    this.unsubscribeFromAuth();

  }
  render() {
    return ( 
      <div>
      <Header />
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
        <Route  path="/signin" component={SignInAndSignUpPage} />
      </Switch>
  
      
      </div>
    )
    
  }
  
}

const mapDispatchToProps = dispatch => ({
  // this will will send an action to all the reducer.
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

// null because we need not return any object.
export default connect(null, mapDispatchToProps)(App);
