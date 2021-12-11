import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{height:'100vh'}} className='d-flex align-items-center justify-content-center error'>
            <div>
                <Link to="/home"><Button className="ff text-dark bg-light">Back to Home</Button></Link>
            </div>
        </div>
    );
};

export default Error;