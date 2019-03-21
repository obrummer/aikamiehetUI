import React from 'react'
import { Card } from 'react-bootstrap';

const NoMatch = props => {
    return (
        <Card>
            <Card.Title>No matches were found for your melody!</Card.Title>
        </Card>
    );
};

export default NoMatch;
