import React, { useState } from 'react';

function CityFun({id,Country_Name}) {
    const [CityName , SetCityName] = useState ('Surat');

    const ChangeCity = () => {
        SetCityName ('Gandhinagar');
    }
    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => ChangeCity()}>Change City</button>
            <p>{id}{Country_Name}</p>
        </div>
    );
}

export default CityFun;