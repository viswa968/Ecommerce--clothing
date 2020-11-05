import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.style.scss'



//  Homepage is a functional component bcoz we dont need state and lifecycle methods here.
const HomePage = () => (
    <div className="homepage">
       <Directory />
    </div>
);

export default HomePage;