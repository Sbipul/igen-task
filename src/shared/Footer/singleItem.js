import React from 'react';
import { Col } from 'react-bootstrap';

const singleItem = () => {
    return (
        <Col>
            <h5 className='m-0 p-0 text-start ff'>Usefull links</h5>
            <ul>
                <li>heading/link</li>
                <li>heading/link</li>
                <li>heading/link</li>
                <li>heading/link</li>
            </ul>
        </Col>
    );
};

export default singleItem;