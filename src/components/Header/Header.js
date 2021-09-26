import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <h1>Bangladesh Film Industry</h1>
            <p className="text-dark fw-bold"><small>where the Legend grows</small></p>
            <p>Yearly income of this industry {props.revenue}M</p>
        </div>
    );
};

export default Header;