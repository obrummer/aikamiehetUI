import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const NoTextMatch = props => {
    return (
        <Row>
            <Col md={2} />
            <Col md={8}>
                <Card>
                    <Card.Title>No matches were found for your text!</Card.Title>
                </Card>
            </Col>
            <Col md={2} />
        </Row>
    );
};

export default NoTextMatch;