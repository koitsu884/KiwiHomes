import React from 'react'

export default function PropertyCard(imgSrc, title, region, city, suburb, rooms, price) {
    return (
        <div className="propertyCard">
            <img className="propertyCard__image" src={imgSrc} alt={title}/>
            <h3>{title}</h3>
            <div className="propertyCard__info">
                <div className="propertyCard__location">{Suburb}, {City}</div>
                <div className="propertyCard__rooms">{rooms}</div>
                <div className="propertyCard__price">{price}</div>
            </div>
        </div>
    )
}
