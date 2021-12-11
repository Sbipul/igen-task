import React from 'react';
import { Button, Container } from 'react-bootstrap';

const About = () => {
    return (
        <div className='clip'>
            <Container>
            <div className="text-end">
                <p className='m-0'>About Us</p>
                <h2>Who we are</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className='w-100'>
                            <div className='mx-auto w-100'>
                                <img style={{objectFit:'cover'}} className='w-100' src="https://i.ibb.co/2MSc8mr/istockphoto-1000173482-170667a-removebg-preview.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className='text-start'>
                            <h1>WE ARE CRYPTIC FATE</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quas veritatis dignissimos eos aut harum in itaque! Voluptates, dignissimos voluptatibus consectetur adipisi.</p>
                            <Button className='shadow-lg text-light bg-primary rounded-pill'>Read more</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;