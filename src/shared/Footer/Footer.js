import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleItem from './singleItem';
import { BsFacebook,BsTwitter,BsLinkedin } from "react-icons/bs";
const Footer = () => {
    return (
        <div className='py-5'>
            <Container>
                <div className="row">
                    <div className="col-12 col-md-7">
                    <Row xs={2} md={4} lg={4} className="g-4">
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                    </Row>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="text-start p-3"> 
                                    <h4 className='m-0 p-0 text-start fs-3 ff2'>Socials</h4>
                                    <div className="d-flex">
                                        <div className='mx-2'><BsFacebook/></div>
                                        <div className='mx-2'><BsTwitter/></div>
                                        <div className='mx-2'><BsLinkedin/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="text-start p-3">
                                    <h4 className='m-0 p-0 text-start ff'>Lorem item</h4>
                                    <input type="text" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Nitatibus eaque maiores fugit voluptatum ipsa?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center p-3">
                    <div className="col-12 col-md-6">
                        <div className="text-start">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam magni tempora, minus maiores aspernatur sint alias cumque ea odit.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="text-end">
                        <h4 className='ff fs-2'>CRYPTIC FATE</h4>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;