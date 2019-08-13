import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__links">
                    <Link to="/about">Abount</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/terms">Terms and Conditions</Link>
                </div>
                <p className="footer__copy">&copy; Kazunori Hayashi</p>
            </div>
        </footer>
    )
}
