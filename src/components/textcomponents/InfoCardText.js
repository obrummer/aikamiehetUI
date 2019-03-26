import React, { Component } from 'react';
import { Row, Card, Col } from 'react-bootstrap';

class InfoCardText extends Component {
    render() {
        return (
               <Row>
                    <Col md={2} />
                    <Col md={8}>
                        <Card>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title>Test your lyrics</Card.Title>
                                <Card.Text>
                                    Write your lyrics below and find matching results.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} />
                </Row>           
        );
    }
}

export default InfoCardText;