import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item style={{height:'89vh'}} className='position-relative w-100 custom-class'>
                <img
                style={{objectFit:'cover'}}
                className="w-100  h-100"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWR2ZXJ0aXNpbmclMjBhZ2VuY3l8ZW58MHx8MHx8&w=1000&q=80"
                alt="First slide"
                />
                <div className='position-absolute bg top-0 start-0 h-100 w-100'>
                    <div className='w-100 position-absolute top-35 h-100'>
                        <h3 className='ff' style={{fontSize : '3rem'}}>WE ARE CRYPTIC FATE</h3>
                        <p style={{textAlign:'justify'}} className='w-res mx-auto'>Lorem ipsum dolor si soluta sequi perferendis tenetur. Ipsa nam iusto exercitationem eos quod eaque perferendis esse amet ad quas. Exercitationem et voluptatibus rerum numquam ratione, dicta quod omnis earum sit architecto.</p>
                        <Button className='rounded-pill'>Contact Nowwwwwww</Button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item style={{height:'89vh'}} className='position-relative w-100 custom-class'>
                <img
                style={{objectFit:'cover'}}
                className="w-100 h-100"
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJpenxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="Second slide"
                />

                <div className='position-absolute bg top-0 start-0 h-100 w-100'>
                    <div className='w-100 position-absolute top-35 h-100'>
                        <h3 className='ff' style={{fontSize : '3rem'}}>WE PROVIDE THE BEST</h3>
                        <p style={{textAlign:'justify'}} className='w-res mx-auto'>Lorem ipsum dolor si soluta sequi perferendis tenetur. Ipsa nam iusto exercitationem eos quod eaque perferendis esse amet ad quas. Exercitationem et voluptatibus rerum numquam ratione, dicta quod omnis earum sit architecto.</p>
                        <Button className='rounded-pill'>Contact Now</Button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item style={{height:'89vh'}} className='position-relative w-100 custom-class'>
                <img
                style={{objectFit:'cover'}}
                className="w-100 h-100"
                src="https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&w=1000&q=80"
                alt="Third slide"
                />

                <div className='position-absolute bg top-0 start-0 h-100 w-100'>
                    <div className='w-100 position-absolute top-35 h-100'>
                        <h3 className='ff' style={{fontSize : '3rem'}}>WE ARE ALWAYS AVAILABLE</h3>
                        <p style={{textAlign:'justify'}} className='w-res mx-auto'>Lorem ipsum dolor si soluta sequi perferendis tenetur. Ipsa nam iusto exercitationem eos quod eaque perferendis esse amet ad quas. Exercitationem et voluptatibus rerum numquam ratione, dicta quod omnis earum sit architecto.</p>
                        <Button className='rounded-pill'>Contact Now</Button>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
