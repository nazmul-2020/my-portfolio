import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact my-5">
        <div className="title ">
            <h1 className=''>Contact Me</h1>
        </div>
        <div className=''>
            <div className="container ">

                <div className="contact-form ">
                    <div className="input-fields bg-dark p-4 rounded shadow-lg ">
                        <input type="text" className="input" placeholder="Name"required />
                        <input type="text" className="input" placeholder="Email Address"required />
                        <input type="text" className="input" placeholder="Phone" />
                        <input type="text" className="input" placeholder="Subject" />
                    </div>
                    <div className="msg bg-dark p-4 rounded shadow-lg">
                        <textarea placeholder="Message" />
                        <button className="btn btn-danger">send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;