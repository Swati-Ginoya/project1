import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CityName :'Surat'
        }
    }
    ChangeCity = () => {
        this.setState({
            CityName : 'Gandhinagar'
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.CityName}</p>
                <button onClick={() => this.ChangeCity()} className="btn">Change City</button>
                <p>{this.props.id}{this.props.Country_Name} </p>
            </div>
        );
    }
}

export default City;