import React, { Component } from 'react';

import RegionDropdown from '../common/RegionDropdown';
import CityDropdown from '../common/CityDropdown';
import SuburbDropdown from '../common/SuburbDropdown';

export default class PropertyEditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            region: 1,
            city: '',
            suburb: '',
            propertyTypes: 'House',
            rooms: 1,
            price: 0
        }
    }

    handleRegionChange = e => {
        this.setState({
            region: e.target.value,
            city: 0,
            suburb: 0
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="propertyEditForm">
                <label>Region</label>
                <div className="select">
                    <RegionDropdown onChange={this.handleRegionChange} name='region' value={this.state.region} />
                </div>
                <label>City</label>
                <div className="select">
                    <CityDropdown onChange={this.onChange} name='city' value={this.state.city} region={this.state.region} />
                </div>
                <label>Suburb</label>
                <div className="select">
                    <SuburbDropdown onChange={this.onChange} name='suburb' value={this.state.suburb} city={this.state.city}  />
                </div>
            </div>
        )
    }
}
