import React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalNav() {
    return (
        <nav className="globalNav">
            <div className="globalNav__container">
                <Link className="globalNav__item" to="/">Search</Link>
                <Link className="globalNav__item" to="/about">About</Link>
                <Link className="globalNav__item" to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
