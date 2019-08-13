import React, { Component } from 'react';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useMap: false,
            region: '',
            city: '',
            suburb: '',
            type: '',
            status: '',
            priceFrom: '',
            priceTo: '',
            roomsFrom: '',
            roomsTo: ''
        };
    }


    handleChange = event => {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.props.onFilterChange(this.state);
        });
    }

    toggleUserMap = event => {
        this.setState({
            useMap: event.target.checked
        }, ()=>{
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
                <div className="filter__item">
                    <h5>Region</h5>
                    <div className="select">
                        <select name="region" onChange={this.handleChange} value={this.state.region}>
                            <option value=""></option>
                            <option value="Auckland">Auckland</option>
                            <option value="Canterbury">Canterbury</option>
                            <option value="Wellington">Wellington</option>
                        </select>
                    </div>
                </div>
                <div className="filter__item">
                    <h5>City</h5>
                    <div className="select">
                        <select name="city" onChange={this.handleChange} value={this.state.city}>
                            <option value=""></option>
                            <option value="Auckland">Auckland</option>
                            <option value="Christchurch">Christchurch</option>
                            <option value="Wellington">Wellington</option>
                        </select>
                    </div>
                </div>
                <div className="filter__item">
                    <h5>Suburb</h5>
                    <div className="select">
                        <select name="suburb" onChange={this.handleChange} value={this.state.suburb}>
                            <option value=""></option>
                            <option value="Hornby">Hornby</option>
                            <option value="Avondale">Avondale</option>
                            <option value="Mt Albert">Mt Albert</option>
                        </select>
                    </div>
                </div>
                <div className="filter__item">
                    <h5>Property Type</h5>
                    <div className="select">
                        <select name="type" onChange={this.handleChange} value={this.state.type}>
                            <option value=""></option>
                            <option value="home">Home</option>
                            <option value="apartment">Apratment</option>
                            <option value="unit">Unit</option>
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
