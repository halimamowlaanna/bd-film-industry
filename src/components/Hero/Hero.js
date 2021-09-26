import React from 'react';
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Hero = (props) => {
    // console.log(props.person);
    const {name,age,monthlyIncome,bestMovie,image} = props.person ;
    const element = <FontAwesomeIcon icon={faThumbsUp} />
    return (
        <div className = "person text-center ">
            <img src={image} alt="" />
            <div className="info">
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Monthly income: ${monthlyIncome}</p>
            <p>Best Movie: {bestMovie}</p>
            <button onClick={() => props.handleCast(props.person)} type="button" className="btn btn-success">{element} Cast</button>
            </div>
            
        </div>
    );
};

export default Hero;