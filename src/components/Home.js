import React, { Component } from 'react';
import { connect} from 'react-redux';
import { ReactComponent as SearchIcon } from '../images/SVG/magnifying-glass.svg';

import { searchProperties} from '../actions/propertyActions';
import Filter from './search/Filter';
import PropertyCard from './property/PropertyCard';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterOpen: false,
            useMap: false,
        };
    }

    componentDidMount(){
        this.props.searchProperties();
    }

    toggleFilter = () => {
        this.setState({
            filterOpen: !this.state.filterOpen
        });
    }

    renderMapSearchResult(){
        return (
            <div className="home__result">Map search is not available yet!!</div> 
        )
    }

    renderSearchResult(){
        return (
            <div className="home__result">
                {this.renderPropertyList()}
            </div>
        )
    }

    renderPropertyList(){
        if(this.props.properties.length === 0)
        return (
            <div>Sorry, the filter has no results...</div>
        )
        return this.props.properties.map(property => {
            return (
                <PropertyCard property={property} key={property.id} />
            )
        })
    }

    onFilterChange = filter => {
        console.log(filter);
        this.props.searchProperties(filter);
    }

    toggleUseMap = useMap => {
        this.setState({
            useMap: useMap
        })
    }

    render() {
        let searchFilterClassName = "home__search__filter" + (this.state.filterOpen ? " open" : ""); 
        return (
            <main className="home">
                <div className="home__search">
                    <div className="home__search__phoneMenu" onClick={this.toggleFilter} >
                        <SearchIcon /> <p>{this.state.filterOpen ? " Close " : " Open "} filter</p>
                    </div>
                    <div className={searchFilterClassName}>
                       <Filter onFilterChange={this.onFilterChange} toggleUseMap={this.toggleUseMap} />
                    </div>
                </div>
                { this.state.useMap ? this.renderMapSearchResult() : this.renderSearchResult() }
            </main>
        )
    }
}

const mapStateToProps = state => ({
    properties: state.property.properties
})

export default connect(mapStateToProps, {searchProperties})(Home);