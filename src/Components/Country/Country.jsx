import React from 'react';

const Country = ({country}) => {
    console.log(country.name.common)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Name : {country.name.common}</p>
        </div>
    );
};

export default Country;