import { Button, Form } from 'react-bootstrap';
import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('gmail', 'gmail', form.current, '5ta4kKQwYFQsabVqZ')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     form.current.reset()
    // }

    return (
        <div className='banner my-5'>
            <div className=' container form mx-auto '>
                <h3 className='text-center pt-4'>Contact Me</h3>
                {/* <Form onSubmit={sendEmail} className='mt-3'> */}
                <Form className='mt-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="name" required placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Messenger" rows={3} />
                    </Form.Group>
                    <Button className='mx-auto' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {/* <form  onSubmit={sendEmail}> */}
                {/* <form>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form> */}

            </div>
        </div>
    );
};

export default Contact;



