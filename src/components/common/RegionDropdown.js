import React from 'react';
import { connect } from 'react-redux';

const RegionDropdown = ({name, className, value, regions, onChange}) => {
    return (
        <select className={className} name={name} onChange={onChange} value={value}>
            <option value={0}></option>
            {
                regions.map(region => {
                    return <option key={region.id} value={region.id}>{region.region}</option>
                })
            }
        </select>
    )
}

const mapStateToProps = state => ({
    regions: state.common.regions
})

export default connect(mapStateToProps, null)(RegionDropdown)

