import React from 'react';
import { Link} from 'react-router-dom';

import { ReactComponent as BedIcon } from '../../images/SVG/bed.svg';
import { ReactComponent as LocationIcon } from '../../images/SVG/location-pin.svg';
import { ReactComponent as MoneyIcon } from '../../images/SVG/credit.svg';

export default function PropertyCard(props) {
    const {property} = props;
    return (
        <div className="propertyCard">
            <Link to = "/property">
            <img className="propertyCard__image" src={property.imageUrl} />
            </Link>
            <h3>{property.title}</h3>
            <div className="propertyCard__info">
                <div className="propertyCard__info__location"><LocationIcon className="icon" /><span>{property.suburb}, {property.city}</span></div>
                <div className="propertyCard__info__rooms"><BedIcon className="icon" /><span> {property.rooms}</span></div>
                <div className="propertyCard__info__price"><MoneyIcon className="icon" /><span>{property.price}</span></div>
            </div>
        </div>
    )
}
