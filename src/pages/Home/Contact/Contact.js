import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FcCollect,FcPhone,FcFeedback } from "react-icons/fc";

const Contact = () => {
    return (
        <div id='contact' className='contact clip'>
            <Container>
            <div className="text-end py-5">
                <p className='m-0'>Contact Us</p>
                <h2>How you can find us?</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div>
                            <div className='d-flex text-start align-items-center'>
                                <FcCollect className='bg-light p-2 rounded-circle' style={{fontSize : '3rem'}}/>
                                <div className='ms-3'>
                                    <h6 className='m-0'>Address</h6>
                                    <p>House no 293, 39 road Mohakhali DOHS <br /> Dhaka Bangladesh</p>
                                </div>
                            </div>
                            <div className='d-flex text-start align-items-center'>
                                <FcPhone className='bg-light p-2 rounded-circle' style={{fontSize : '3rem'}}/>
                                <div className='ms-3'>
                                    <h6 className='m-0'>Phone</h6>
                                    <p>+454552-54152 <br /> nor, 59656-645564</p>
                                </div>
                            </div>
                            <div className='d-flex text-start align-items-center'>
                                <FcFeedback className='bg-light p-2 rounded-circle' style={{fontSize : '3rem'}}/>
                                <div className='ms-3'>
                                    <h6 className='m-0'>Email address</h6>
                                    <p>xyz@gmail.com <br /> abcd@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className='text-start border border-1 p-4 rounded'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicMessage">
                                    <textarea type="text" className='w-100 p-3' placeholder="Your Message" />
                                </Form.Group>
                                <Button variant="light" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
