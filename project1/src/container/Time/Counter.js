import React, { useState } from 'react';

function Counter(props) {

    const [count , setcount] = useState(0);

    const increase = () => {
        if(count === 10){
            setcount (count)
        }else{
            setcount (count + 1)
        }
    }

    const decrease = () => {
        if(count === 0){
            setcount (count)
        }else{
            setcount (count - 1)
        }
    }
    return (
        <div className='btn'>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <h1>{count}</h1>
        </div>
    );
}

export default Counter;