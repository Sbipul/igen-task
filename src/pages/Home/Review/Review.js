import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Review = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const reviewer = [
        {
          name : 'Richard Manhate',
          img : "https://i.ibb.co/myZWF32/photo-1597204081767-4c14a6b7cbec.jpg",
          msg : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          name : 'Gandhiya holmos',
          img : 'https://image.shutterstock.com/image-photo/closeup-portrait-happy-asian-man-260nw-1023587158.jpg',
          msg : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          name : 'David palermo',
          img : 'https://image.shutterstock.com/image-photo/latin-hipster-guy-wearing-glasses-260nw-333000893.jpg',
          msg : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          name : 'Belly anderson',
          img : 'https://media.istockphoto.com/videos/the-man-laughing-on-the-white-background-slow-motion-video-id1136449639?s=640x640',
          msg : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          name : 'Sterile leonard',
          img : 'https://media.istockphoto.com/photos/smiling-indian-man-on-white-background-picture-id1042419790?k=20&m=1042419790&s=170667a&w=0&h=k6F72tjXoYP9_JxcZELu7n_Yd6hRy1qP6arlEyXqmk0=',
          msg : 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
      ]
    return (
        <div className='py-5'>
            <Container>
            <div className="text-start py-5">
                <p className='m-0'>Clients Review</p>
                <h2>Our Clients Given review</h2>
                </div>
            </Container>
            <Carousel responsive={responsive}>
              {
                reviewer.map(review => <Card key={review?.name} className='border-0 px-5'>
                <Card.Img style={{height:'170px',width:'170px',objectFit : 'cover'}} className='mx-auto rounded-circle overflow-hidden' variant="top" src={review?.img} />
                <Card.Body className='text-center'>
                <Card.Title>{review?.name}</Card.Title>
                <Card.Text>
                {review?.msg}
                </Card.Text>
                </Card.Body>
            </Card>)
              }
            </Carousel>
        </div>
    );
};

export default Review;