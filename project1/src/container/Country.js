import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CountryName : 'India'
        }
    }
    Changecountry = () =>{
        this.setState ({
            CountryName : 'Germany'
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.CountryName}</p>
                <button onClick = {() => this.Changecountry()}>Country</button>
                <City  id="105" Country_Name={this.state.CountryName}/>
            </div>
        );       
    }
}

export default Country;