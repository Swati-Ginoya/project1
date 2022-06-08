import React from 'react';

function Loading(Component) {
    return function loader({isLoading, data}){
       if(isLoading){
           return(
            <h1 class="scanning">Scanning... </h1>
           )
       }else{
           return(
               <Component data = {data}/>
           )
       }
    }
}

export default Loading;