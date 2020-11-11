import React from 'react';

import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
//connect takes in a function and powers it up and returns a function.
import { connect } from 'react-redux';


const Header = ({ currentUser }) => (
    <div className='header'>
       <Link className='logo-container' to ="/">
           <Logo className='logo' />
       </Link>
       <div className='options'>
         <Link className='option' to='/shop'>
             SHOP
         </Link>
         <Link className='option' to='/shop'>
             CONTACT
         </Link>
         {
             currentUser ? (
             <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
             ):(
             <Link className='option' to="/signin">SIGN IN</Link>
             )}


       </div>
      

    </div>
)

const mapStateToProps = state => ({
    // here, the state is the root state(global state)
    // this will help us get the current state of the user.
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);