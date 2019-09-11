import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProperties, deleteProperty } from '../../actions/manageActions';
import PropertyRow from './PropertyRow';
import Alert from '../../utils/Alert';

class PropertyList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProperties();
    }

    handleDelete = (id) => {
        Alert.confirm('Are you sure to delete the property?')
            .then((result) => {
                if (result.value) {
                    this.props.deleteProperty(id);
                }
            })
    }

    renderPropertyList = () => {
        const { properties } = this.props;
        if (properties && properties.length > 0) {
            return (
                properties.map(property => {
                    return (
                        <div key={property.id}>
                            <PropertyRow property={property} />
                            <Link to={`/admin/property/${property.id}/edit`} type="button" className="btn btn--green">Edit</Link>
                            <a onClick={() => this.handleDelete(property.id)} className="btn btn--red">Delete</a>
                        </div>
                    )
                })
            )
        }
        return <div>No results found</div>
    }

    render() {
        return (
            <div className="propertyList">
                <h2>Property List</h2>
                <Link to="/admin/property/add" className="btn">Add new property</Link>
                {this.renderPropertyList()}
            </div>
        )
    }
}

const masStateToProps = state => ({
    properties: state.manageProperty.properties
})

export default connect(masStateToProps, { getProperties, deleteProperty })(PropertyList);