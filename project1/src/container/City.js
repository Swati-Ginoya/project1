import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CityName :'Surat'
        }
    }
    ChangeCountry = () => {
        this.setState({
            CityName : 'Gandhinagar'
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CityName}</p>
                <button onClick={() => this.ChangeCountry()} className="btn">Change City</button>
            </div>
        );
    }
}

export default City;