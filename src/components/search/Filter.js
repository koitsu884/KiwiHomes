import React, { Component } from 'react';
import RegionDropdown from '../common/RegionDropdown'
import CityDropdown from '../common/CityDropdown'
import SuburbDropdown from '../common/SuburbDropdown'

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useMap: false,
            region: 0,
            city: 0,
            suburb: 0,
            propertyType: '',
            status: '',
            priceFrom: '',
            priceTo: '',
            roomsFrom: '',
            roomsTo: ''
        };
    }

    handleRegionChange = e => {
        this.setState({
            region: e.target.value,
            city: 0,
            suburb: 0
        }, () => {
            this.props.onFilterChange(this.state);
        });
    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            this.props.onFilterChange(this.state);
        });
    }

    toggleUserMap = event => {
        this.setState({
            useMap: event.target.checked
        }, () => {
            this.props.toggleUseMap(this.state.useMap);
        })
    }

    render() {
        return (
            <div className="filter">
                <div className="filter__item">
                    <h5>Search by map</h5>
                    <div className="switch">
                        <input id="toggleMap" type="checkbox" checked={this.state.useMap} onChange={this.toggleUserMap}></input>
                        <label htmlFor="toggleMap" />
                    </div>
                </div>
                <div className="filter__item filter__item--location">
                    <h5>Region</h5>
                    <div className="select">
                        <RegionDropdown onChange={this.handleRegionChange} name='region' value={this.state.region} />
                    </div>
                </div>
                <div className="filter__item filter__item--location">
                    <h5>City</h5>
                    <div className="select">
                        <CityDropdown onChange={this.handleChange} name='city' value={this.state.city} region={this.state.region} />
                    </div>
                </div>
                <div className="filter__item filter__item--location">
                    <h5>Suburb</h5>
                    <div className="select">
                        <SuburbDropdown onChange={this.handleChange} name='suburb' value={this.state.suburb} city={this.state.city} />
                    </div>
                </div>
                <div className="filter__item">
                    <h5>Property Type</h5>
                    <div className="select">
                        <select name="propertyType" onChange={this.handleChange} value={this.state.propertyType}>
                            <option value=""></option>
                            <option value="House">House</option>
                            <option value="Appartment">Appartment</option>
                            <option value="Unit">Unit</option>
                        </select>
                    </div>
                </div>
                <div className="filter__item">
                    <h5>Status</h5>
                    <div className="select">
                        <select name="status" onChange={this.handleChange} value={this.state.status}>
                            <option value=""></option>
                            <option value="On sale">On sale</option>
                            <option value="Sold">Sold</option>
                        </select>
                    </div>
                </div>
                <div className="filter__item">
                    <h5>Price</h5>
                    <div className="filter__item__price">
                        <div className="select">
                            <select name="priceFrom" onChange={this.handleChange} value={this.state.priceFrom}>
                                <option value=""></option>
                                <option value="300000">300,000</option>
                                <option value="500000">500,000</option>
                            </select>
                        </div>
                        <div> to </div>
                        <div className="select">
                            <select name="priceTo" onChange={this.handleChange} value={this.state.priceTo}>
                                <option value="500000">500,000</option>
                                <option value="">1,000,000+</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="filter__item">
                    <h5>Bedroom</h5>
                    <div className="filter__item__rooms">
                        <div className="select">
                            <select name="roomsFrom" onChange={this.handleChange} value={this.state.roomsFrom}>
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div> to </div>
                        <div className="select">
                            <select name="roomsTo" onChange={this.handleChange} value={this.state.roomsTo}>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="">5+</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
