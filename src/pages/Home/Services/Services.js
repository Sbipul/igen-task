import React, { useEffect, useState } from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Services = () => {
    const history = useHistory()
    const [services,setServices] = useState([])

    useEffect(()=> {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const details = id => {
        history.push(`details/${id}`)
    }   

    return (
        <div id='service' className='py-5'>
            <Container>
                <div className="text-start py-5">
                <p className='m-0'>Our services</p>
                <h2>What services we provide</h2>
                </div>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        services.map(service => <Col onClick={()=>details(service?.id)} key={service?.id} className='hover p-2'>
                        <Card className=' border-0'>
                            <div style={{height : '100px',width : '100px'}} className='overflow-hidden text-center d-flex align-items-center justify-content-center rounded-circle p-1 shadow-lg mx-auto'>
                                <img style={{objectFit:'cover'}} className='w-100 h-100' src={service?.img} alt="" />
                            </div>
                            <Card.Body>
                            <Card.Title>{service?.name}</Card.Title>
                            <Card.Text>
                                {service?.des}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;