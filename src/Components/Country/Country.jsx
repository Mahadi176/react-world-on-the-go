import React, { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountries}) => {
     
    const [visited,SetVisited] = useState(false)

    const handleVisited = () =>{
            SetVisited(true)
            handleVisitedCountries(country)
    }

    return (
        <div className='Country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Name : {country.name.common}</h4>
            <p>Population :{country.population.population} </p>
            <p>Area : {country.area.area} sqKm {country.area.area > 300000 ? '(Big Country)': '(Small Country)'}</p>

            <button onClick={handleVisited}>
                {visited ? 'Visited':'Not Visited'}
            </button>
        </div>
    );
};

export default Country;