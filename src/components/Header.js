import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/userActions';

class Header extends Component {
    renderAuth = () => {
        if (this.props.user) {
            return (
                <Fragment>
                    <a href="#" className="header__auth__item" onClick={() => this.props.signOut()}>Sign out</a>
                </Fragment>
            )

        }

        return (
            <Fragment>
                <Link className="header__auth__item" to ="/signin">Sign In</Link>
                <Link className="header__auth__item" to = "/signup">Register</Link>
            </Fragment>
        )


    }

    render() {
        return (
            <header className="header">
                <div className="header__container">
                    <h1><Link to="/">Kiwi Homes</Link></h1>
                    <div className="header__auth">
                        {this.renderAuth()}
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})

export default connect(mapStateToProps, { signOut })(Header);
