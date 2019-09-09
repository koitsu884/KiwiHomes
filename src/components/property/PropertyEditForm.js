import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import history from '../../history';
import { toast } from 'react-toastify';
import keys from '../../config/keys';

import RegionDropdown from '../common/RegionDropdown';
import CityDropdown from '../common/CityDropdown';
import SuburbDropdown from '../common/SuburbDropdown';
import TextFieldGroup from '../common/TextFieldGroup';

const apiBaseURL = keys.apiURL;

class PropertyEditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            image: null,
            imagePreviewUrl: '',
            region: 1,
            city: '',
            suburb: '',
            address: '',
            propertyType: 'House',
            rooms: 1,
            price: 0,
            errors: {}
        }
    }

    handleRegionChange = e => {
        this.setState({
            region: e.target.value,
            city: 0,
            suburb: 0
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image: file,
                imagePreviewUrl: reader.result
            })
        }

        reader.readAsDataURL(file);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('title', this.state.title);
        form_data.append('region_id', +this.state.region);
        form_data.append('city_id', +this.state.city);
        form_data.append('suburb_id', +this.state.suburb);
        form_data.append('address', this.state.address);
        form_data.append('propertyType', this.state.propertyType);
        form_data.append('rooms', +this.state.rooms);
        form_data.append('price', +this.state.price);
        form_data.append('user', this.props.userId);

        for (var pair of form_data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        axios.post('property/properties/', form_data, {
            baseURL: apiBaseURL,
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            toast.success("Added the property");
            history.push('/admin/property')
            console.log(res.data);
        })
        .catch(err => console.log(err))
    };

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div>Please select an Image for Preview</div>);
        }

        return (
            <form className="propertyEditForm form" onSubmit={this.handleSubmit}>
                <div className="propertyEditForm__section propertyEditForm__title">
                    <label>Title</label>
                    <TextFieldGroup
                        placeholder="Title"
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.onChange}
                        error={this.state.errors.title}
                    />
                </div>
                <div className="propertyEditForm__section">
                    <h5>Main image</h5>
                    <label className="fileContainer">
                        Select file
                        <input type="file" accept="image/*" onChange={this.handleImageChange} required />
                    </label>
                    <div className="propertyEditForm__image__preview">
                        {$imagePreview}
                    </div>
                </div>
                <div className="propertyEditForm__section propertyEditForm__location">
                    <div className="propertyEditForm__location--region">
                        <label>Region</label>
                        <div className="select">
                            <RegionDropdown onChange={this.handleRegionChange} name='region' value={this.state.region} />
                        </div>
                    </div>
                    <div className="propertyEditForm__location--city">
                        <label>City</label>
                        <div className="select">
                            <CityDropdown onChange={this.onChange} name='city' value={this.state.city} region={this.state.region} />
                        </div>
                    </div>
                    <div className="propertyEditForm__location--suburb">
                        <label>Suburb</label>
                        <div className="select">
                            <SuburbDropdown onChange={this.onChange} name='suburb' value={this.state.suburb} city={this.state.city} />
                        </div>
                    </div>
                </div>
                <div className="propertyEditForm__section propertyEditForm__address">
                    <label>Address</label>
                    <TextFieldGroup
                        placeholder="Address"
                        name="address"
                        type="text"
                        value={this.state.address}
                        onChange={this.onChange}
                        error={this.state.errors.address}
                    />
                </div>
                <div className="propertyEditForm__section propertyEditForm__etc">
                    <div className="propertyEditForm__etc--type">
                        <label>Property Type</label>
                        <div className="select">
                            <select name='propertyType' onChange={this.onChange} value={this.state.propertyType}>
                                <option value="House">House</option>
                                <option value="Appartment">Appartment</option>
                                <option value="Unit">Unit</option>
                            </select>
                        </div>
                    </div>
                    <div className="propertyEditForm__etc--rooms">
                        <label>Number of rooms</label>
                        <div className='select'>
                            <select name='rooms' onChange={this.onChange} value={this.state.rooms}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5+</option>
                            </select>
                        </div>
                    </div>
                    <div className="propertyEditForm__etc--price">
                        <label>Price</label>
                        <TextFieldGroup
                            placeholder="Price"
                            name="price"
                            type="number"
                            value={this.state.price}
                            onChange={this.onChange}
                            error={this.state.errors.price}
                        />
                    </div>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    userId: state.user.user.id
})

export default connect(mapStateToProps, null)( PropertyEditForm);