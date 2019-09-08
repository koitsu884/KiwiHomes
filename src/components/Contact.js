import React, {Fragment} from 'react'

export default function Contact() {
    return (
        <Fragment>
        <div className="pageHeader pageHeader--contact">
            <h1>Contact Us</h1>
        </div>
        <main className="contact">
            <div className="contact__map">
                Map area (Google map API will be used)
            </div>
            <div className="contact__info">
                <div>
                    <h3>Address:</h3>
                    <p>SOmewhere st 14, Hornby, Christchurch</p>
                </div>
                <div>
                    <h3>Phone:</h3>
                    <p>+61 4 678 903</p>
                </div>
                <div>
                    <h3>Email:</h3>
                    <p>abobexd@gmail.com</p>
                </div>
            </div>
        </main>
        </Fragment>
    )
}
