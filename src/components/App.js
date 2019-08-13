import React from 'react';
import '../css/style.css';
import { HashRouter, Route } from 'react-router-dom';
import history from '../history';
import { Provider } from 'react-redux';

import store from '../store';
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

if (localStorage.jwtToken) {
    //setAuthToken(localStorage.jwtToken);
    // store.dispatch(setCurrentUser(JSON.parse(localStorage.user)));
}

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter history={history}>
            <Header />
            <GlobalNav />
              <Route path="/" exact component={Home} />
              <Route path="/signin" exact component={Signin} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/terms" exact component={Terms} />
              <Route path="/property/:id" exact component={PropertyDetails} />
            <Footer />
            </HashRouter>
        </Provider>
    )
}

export default App;
