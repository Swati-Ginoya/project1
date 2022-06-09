import React from 'react';

function Home({data}) {
    return (
        data.map((d,i) => {
            return(
                <div key={i}>
                    <h3>{d.id}</h3>
                    <h4>{d.name}</h4>
                </div>
            )
        })
    );
}

export default Home;        