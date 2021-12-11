import React from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    const services = [
        {
            name :'Web Design', 
            img : "https://i.pinimg.com/originals/3e/da/60/3eda6034c384d28ff530ff3257ecaccc.gif",
            des : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            name :'Web Development',
            img : 'https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif',
            des : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            name :'App Development', 
            img : 'https://cdn.dribbble.com/users/5976/screenshots/2217655/open-uri20150828-3-1n35494',
            des : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            name :'Digital Marketing', 
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiKVI1ZwsfxqP1uifYQsWmEKiQAIjj3WsMMY2hjcbV-e6YoDqGqZ-oQTKUFzGbCLvuhY&usqp=CAU',
            des : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            name :'Graphics Design', 
            img : 'https://i.graphicmama.com/blog/wp-content/uploads/2019/10/03072330/logo-design-trends-2020-animated-black-and-white-logos-example-3.gif',
            des : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
            name :'Block Chaining', 
            img : 'https://media1.giphy.com/media/Wu4TiWLLFqxk4KMRiU/giphy.gif',
            des : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        }
    ]
    return (
        <div id='service' className='py-5'>
            <Container>
                <div className="text-start py-5">
                <p className='m-0'>Our services</p>
                <h2>What services we provide</h2>
                </div>
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        services.map(service => <Col key={service} className=' p-2'>
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