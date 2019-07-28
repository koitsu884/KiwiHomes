import React from 'react';
import '../css/style.css';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import { Provider } from 'react-redux';

import store from '../store';
import Header from './Header';
import GlobalNav from './GlobalNav';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';

if (localStorage.jwtToken) {
    //setAuthToken(localStorage.jwtToken);
    // store.dispatch(setCurrentUser(JSON.parse(localStorage.user)));
}

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
            <Header />
            <GlobalNav />
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
            <Footer />
            </Router>
        </Provider>
    )
}

export default App;
