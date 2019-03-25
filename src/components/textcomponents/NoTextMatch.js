import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const NoTextMatch = props => {
    return (
        <Row>
            <Col md={3} />
            <Col md={6}>
                <Card>
                    <Card.Title>No matches were found for your text!</Card.Title>
                </Card>
            </Col>
            <Col md={3} />
        </Row>
    );
};

export default NoTextMatch;