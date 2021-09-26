import React from 'react';
import { useEffect, useState } from 'react';
import Cast from '../Cast/Cast';
import Hero from '../Hero/Hero';
import './Main.css'

const Main = () => {
    const [persons,setPersons]= useState([])
    const [cast,setCast]=useState([]);
  useEffect(()=>{
    fetch('./tools.JSON')
    .then(res => res.json())
    .then(data => setPersons(data))
  },[])
  const handleCast = (hero) => {
    const newCast = [...cast,hero]
    setCast(newCast);
  }
  // console.log(persons.length)
    return (
        <div className="container">
        
        <div className="industry-component my-3">

          <div className="heroes-container">
            {
              persons.map(person => <Hero 
              key={person.key} 
              person={person}
              handleCast = {handleCast}
              >
              </Hero>)
            }
          </div>

          <div className="casting-heroes">
            <Cast cast ={cast}/>
          </div>

        </div>
        
        </div>
    );
};

export default Main;