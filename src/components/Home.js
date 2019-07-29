import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import { connect} from 'react-redux';
import { searchProperties} from '../actions/propertyActions';
import Filter from './search/Filter';

class Home extends Component {
    componentDidMount(){
        this.props.searchProperties();
    }

    renderPropertyList(){
        return this.props.properties.map(property => {
            return (
                <div className="propertyCard" key={property._id}>
                    <Link to = "/property">
                    <img className="propertyCard__image" src={property.imageUrl} />
                    </Link>
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
                    <Filter />
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