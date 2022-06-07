import React, { useEffect, useState } from 'react';

function TimeFun(props) {
    const [time ,settime] = useState(new Date());

    const tick = () => {
        settime (new Date ());
    }

    useEffect(() => {
        const timeI = setInterval (() => tick(),1000);

        return() => {
            clearInterval (timeI);
        }
    } ,[time])

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimeFun;