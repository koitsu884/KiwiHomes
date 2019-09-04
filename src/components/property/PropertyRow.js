import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BedIcon } from '../../images/SVG/bed.svg';
import { ReactComponent as LocationIcon } from '../../images/SVG/location-pin.svg';
import { ReactComponent as MoneyIcon } from '../../images/SVG/credit.svg';
import { ReactComponent as HomeIcon } from '../../images/SVG/home.svg';

export default function PropertyRow({ property }) {
    return (
        <div className="propertyRow">
            <Link to={`/property/${property.id}`}>
                <h3>{property.title}</h3>
            </Link>
            <div className="propertyRow__info">
                <img className="propertyRow__info__image" src={property.image} alt='Main image' />
                <div>
                    <div className="propertyRow__info__location"><LocationIcon className="icon" /><span>{property.address}, {property.suburb.name}, {property.city.name}</span></div>
                    <div className="propertyRow__info__rooms"><HomeIcon className="icon" /><span> {property.propertyType}</span></div>
                    <div className="propertyRow__info__rooms"><BedIcon className="icon" /><span> {property.rooms}</span></div>
                    <div className="propertyRow__info__price"><MoneyIcon className="icon" /><span>{property.price}</span></div>
                </div>
            </div>
            <div>{property.description}</div>
        </div>
    )
}
