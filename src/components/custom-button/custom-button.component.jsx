import React from 'react';

import './custom-button.styles.scss'


const CustomButton = ({children,isGoogleSignIn, inverted, ...otherProps}) => (
    // here,children are the props that we push into our custom button.
    <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} 
    {...otherProps}>
       {children}

    </button>
)


export default CustomButton;