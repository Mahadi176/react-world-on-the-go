import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) =>
      {
       console.log("visited",country)
       const newVisitedCountry = [...visitedCountries,country]
       setVisitedCountries(newVisitedCountry)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    return (
      <div>
            <h1>In The Countries : {countries.length}</h1>
            <p>Total Country Visited : {visitedCountries.length}</p>
            <ol>
            {  visitedCountries.map(country => <li>{country.name.common}</li> ) }
            </ol>
        <div className='Countries'>
          {
            countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
          }
        </div>
      </div>
    );
};

export default Countries;