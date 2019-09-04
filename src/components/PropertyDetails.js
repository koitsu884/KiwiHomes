import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProperty } from '../actions/propertyActions';

class PropertyDetails extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            this.props.getProperty(id);
        }
    }

    renderTitle() {
        const { details } = this.props;
        return details ? <h1>{details.title}</h1> : <h1></h1>;
    }

    renderImage(){
        const { details } = this.props;
        return details 
            ? (
                <div className="propertyDetails__garelly">
                    <img src={details.image} />
                </div>
            )  
            :
            (
                <div className="propertyDetails__garelly">
                    Loading...
                </div>
            ) ;
    }

    renderDetails() {
        const { details } = this.props;
        if (details) {
            return (
                <div>
                    <h5>Address:</h5>
                    <p>{details.suburb.name}. {details.city.name}</p>
                    <h5>Price:</h5>
                    <p>{details.price}</p>
                    <h5>Number of bedrooms:</h5>
                    <p>{details.rooms}</p>
                </div>
            )
        }

        return (
            <div>Loading...</div>
        )
    }

    render() {
        return (
            <div className="propertyDetails">
                {this.renderTitle()}
                {this.renderImage()}
                <div className="propertyDetails__info">
                    {this.renderDetails()}
                    <div className="propertyDetails__info__description">
                        <h5>Description</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum. Urna neque viverra justo nec ultrices. Tristique senectus et netus et malesuada fames ac. Gravida cum sociis natoque penatibus et magnis dis. Sed blandit libero volutpat sed cras ornare arcu. In hac habitasse platea dictumst. Bibendum ut tristique et egestas. Nec nam aliquam sem et tortor. Ut eu sem integer vitae justo eget magna fermentum iaculis. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Nam at lectus urna duis convallis convallis tellus id interdum. Maecenas accumsan lacus vel facilisis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Enim tortor at auctor urna nunc id cursus metus. Cursus turpis massa tincidunt dui ut ornare lectus sit amet.

Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Cras pulvinar mattis nunc sed. Massa sed elementum tempus egestas. Bibendum arcu vitae elementum curabitur. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Pellentesque elit eget gravida cum sociis natoque penatibus et. Nec feugiat in fermentum posuere. Ac tortor dignissim convallis aenean et tortor at risus. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Morbi quis commodo odio aenean. Pulvinar neque laoreet suspendisse interdum. At augue eget arcu dictum varius duis at consectetur lorem. Convallis convallis tellus id interdum velit. Ut aliquam purus sit amet luctus venenatis lectus magna. Felis imperdiet proin fermentum leo. Lacus vel facilisis volutpat est velit egestas dui. Morbi tristique senectus et netus. Neque laoreet suspendisse interdum consectetur. Tristique nulla aliquet enim tortor at auctor urna. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    details: state.property.propertyDetails
});

export default connect(mapStateToProps, { getProperty })(PropertyDetails);
