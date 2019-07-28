import React, { Component } from 'react';

import { connect} from 'react-redux';
import { searchProperties} from '../actions/propertyActions';

class Home extends Component {
    componentDidMount(){
        this.props.searchProperties();
    }

    renderPropertyList(){
        return this.props.properties.map(property => {
            return (
                <div className="propertyCard" key={property._id}>
                    <img className="propertyCard__image" src={property.imageUrl} />
                    <h3>{property.title}</h3>
                    <div className="propertyCard__info">
                        <div className="propertyCard__info__location">{property.suburb}, {property.city}</div>
                        <div className="propertyCard__info__rooms">{property.rooms}</div>
                        <div className="propertyCard__info__price">{property.price}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <main className="home">
                <div className="home__filter">
                    <div className="home__filter__container">
                        <div>Search by map</div>
                        <div>Region</div>
                        <div>City</div>
                        <div>Suburb</div>
                        <div>Property TYpe</div>
                    </div>
                </div>
                <div className="home__result">
                    {this.renderPropertyList()}
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    properties: state.property.properties
})

export default connect(mapStateToProps, {searchProperties})(Home);