import React from 'react';
import { Card } from 'react-bootstrap';

const ErrorComponent = props => {
    return (
        <Card>
            <Card.Title>An error happened, please try again</Card.Title>
        </Card>
    );
};

export default ErrorComponent;
