import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <h1><Link to = "/">Kiwi Homes</Link></h1>
                <div className="header__auth">
                    <p>User name?</p>
                </div>
            </div>
        </header>
    )
}
