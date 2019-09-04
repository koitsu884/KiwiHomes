import React, { Component } from 'react'
import { connect } from 'react-redux';

class SuburbDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suburbs: this.props.allSuburbs.filter(suburb => suburb.city === +props.city)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city || nextProps.city === 0) {
            this.setState({
                suburbs: this.props.allSuburbs.filter(suburb => suburb.city === +(nextProps.city))
            })
        }
    }

    render() {
        const { className, name, onChange, value } = this.props;

        return (
            <select className={className} name={name} onChange={onChange} value={value}>
                <option value={0}></option>
                {
                    this.state.suburbs.map(suburb => {
                        return <option key={suburb.id} value={suburb.id}>{suburb.name}</option>
                    })
                }
            </select>
        )
    }
}

const mapStateToProps = state => ({
    allSuburbs: state.common.suburbs
})

export default connect(mapStateToProps, null)(SuburbDropdown)