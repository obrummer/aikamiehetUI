import React, { Component } from 'react';
import { Row, Card, Col } from 'react-bootstrap';

class InfoCardHum extends Component {
    render() {
        return (
               <Row>
                    <Col md={2} />
                    <Col md={8}>
                        <Card>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title>Test your song by humming</Card.Title>
                                <Card.Text>
                                    Hum away your tune and get matching results.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} />
                </Row>           
        );
    }
}

export default InfoCardHum;