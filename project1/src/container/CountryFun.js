import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {
    const [CountryName ,setCountryName] = useState ('India');

    const ChangeCountry = () =>{
        setCountryName ('Germany');
    }
    return (
        <div>
            <p>{CountryName}</p>
            <button onClick={() => ChangeCountry()}>Country</button>
            <CityFun  id="101" Country_Name={CountryName}/>
        </div>
    );
}

export default CountryFun;