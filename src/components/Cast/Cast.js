import React from 'react';
import './Cast.css'

const Cast = (props) => {
    const {cast} = props;
    let total = 0;
    for (const hero of cast) {
        total = total+ hero.monthlyIncome
    }

    return (
        <div className="cast-info shadow p-3 mb-5 bg-body rounded">
            <h5>Hero added: {props.cast.length}</h5>
            <h5>Casting cost: ${total}</h5>
            <div className="selected">
            <h5>List of heroes:</h5>
            <ul>
            {
                cast.map( person => {
                    return <li>{person.name}</li>
                })
            }
            </ul>     
            </div>
                   
        </div>
    );
};

export default Cast;