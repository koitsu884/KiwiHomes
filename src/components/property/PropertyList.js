import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PropertyList extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        //Get All properties
    }

    render() {
        return (
            <div className="propertyList">
                <h2>Property List</h2>
                <Link to="/admin/property/add" className="btn">Add new property</Link>
            </div>
        )
    }
}

export default PropertyList;