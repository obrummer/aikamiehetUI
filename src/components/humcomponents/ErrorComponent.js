import React from 'react';
import { Card } from 'react-bootstrap';

const ErrorComponent = props => {
    return (
        <Card>
            <Card.Title>Error: {props.msg}</Card.Title>
        </Card>
    );
};

export default ErrorComponent;
