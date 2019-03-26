import React, { Component } from 'react';
import { Row, Card, Col } from 'react-bootstrap';

class InfoCardFile extends Component {
    render() {
        return (
               <Row>
                    <Col md={2} />
                    <Col md={8}>
                        <Card>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title>Test your produced song</Card.Title>
                                <Card.Text>
                                    Test your song by sending .mp3 or .ogg -file and get matching results for your song.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} />
                </Row>           
        );
    }
}

export default InfoCardFile;