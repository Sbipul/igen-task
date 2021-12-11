import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header.js/Header';


const ServiceDetails = () => {
    const {id} = useParams()

    const [service,setService] = useState([])

    useEffect(()=> {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => 
            {
                const newService = data.find(service => (+service.id) === +id)
                setService(newService)
            }
        )
    },[id])

 
    return (
        <>
        <Header/>
        <div className='py-5'>
            <Container>
            <h1 className='ff py-5'>{service?.name}</h1>
            <div className="row">
                <div className="col-12 col-md-6">
                <div>
                    <Row xs={1} md={2} lg={2} className="g-4">
                        {
                            service?.work?.map(img => <div>
                            <img src={img} alt="" className="w-100 custom-height" />
                            </div>)
                        }
                        
                    </Row>
                </div>
                </div>
                <div className="col-12 col-md-6">
                    <div  className='text-start'>
                        <p>{service?.details}</p>
                        <Button className='rounded-pill py-2 px-3 mx-2'>Grab Now</Button>
                        <Link to="/home"><Button className='rounded-pill py-2 px-3 mx-2'>Previous</Button></Link>
                    </div>
                </div>
            </div>
                
            
            </Container>
        </div>
        <Footer/>
        </>
    );
};

export default ServiceDetails;