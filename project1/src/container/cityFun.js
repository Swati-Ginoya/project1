import React, { useState } from 'react';

function cityFun(props) {
    const [CityName , SetCityName] = useState ('Surat');

    const ChangeCity = () => {
        SetCityName ('Gandhinagar');
    }
    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => ChangeCity()}>Change City</button>
        </div>
    );
}

export default cityFun;