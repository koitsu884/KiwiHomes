import React from 'react'
import PropertyEditForm from './PropertyEditForm';

export default function EditProperty(props) {
    if(!props.match.params.id){
        return (
            <div>
                Property id is not set
            </div>
        )
    }

    return (
        <div className="editProperty">
            <h2>Edit Property</h2>
            <PropertyEditForm propertyId = {props.match.params.id} />
        </div>
    )
}
