import React, { Component } from 'react'
import { connect } from 'react-redux';

class CityDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: this.props.allCities.filter(city => city.region === +props.region)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.region) {
            this.setState({
                cities: this.props.allCities.filter(city => city.region === +(nextProps.region))
            })
        }
    }

    render() {
        const { className, name, onChange, value } = this.props;

        return (
            <select className={className} name={name} onChange={onChange} value={value}>
                <option value={0}></option>
                {
                    this.state.cities.map(city => {
                        return <option key={city.id} value={city.id}>{city.city}</option>
                    })
                }
            </select>
        )
    }
}

const mapStateToProps = state => ({
    allCities: state.common.cities
})

export default connect(mapStateToProps, null)(CityDropdown)