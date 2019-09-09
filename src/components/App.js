import React, { Component } from 'react';
import '../css/style.css';
import { Router, Route } from 'react-router-dom';
import history from '../history';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from './Header';
import GlobalNav from './GlobalNav';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PropertyDetails from './PropertyDetails';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Terms from './Terms';
import PrivateRoute from './common/PrivateRoute';
import PropertyList from './property/PropertyList';
import CreateProperty from './property/CreateProperty';
import EditProperty from './property/EditProperty';
import { connect } from 'react-redux';
import { getRegions, getCities, getSuburbs } from '../actions/commonActions';

if (localStorage.jwtToken) {
    //setAuthToken(localStorage.jwtToken);
    // store.dispatch(setCurrentUser(JSON.parse(localStorage.user)));
}

class App extends Component {
    componentDidMount() {
        this.props.getRegions();
        this.props.getCities();
        this.props.getSuburbs();
    }

    render() {
        return (
            <Router history={history}>
                <Header />
                <GlobalNav />
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/terms" exact component={Terms} />
                <Route path="/property/:id" exact component={PropertyDetails} />
                <PrivateRoute path="/admin/property" exact component={PropertyList} />
                <PrivateRoute path="/admin/property/add" exact component={CreateProperty} />
                <PrivateRoute path="/admin/property/:id/edit" exact component={EditProperty} />
                <Footer />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    pauseOnHover
                />
            </Router>
        )
    }
}

export default connect(null, { getRegions, getCities, getSuburbs })(App);
