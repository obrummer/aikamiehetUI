import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AppCardHum extends Component {
    render() {
        return (
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="testpic.png" />
                <Card.Body>
                    <Card.Title>Test by humming</Card.Title>
                    <Card.Text>Test your song by humming and get matching results.</Card.Text>
                    <Link to="/humrecord">
                        <Button variant="primary">Test</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}

export default AppCardHum;
