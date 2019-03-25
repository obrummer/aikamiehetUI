import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AppCardText extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="textpic.png" />
                <Card.Body>
                    <Card.Title>Test your lyrics</Card.Title>
                    <Card.Text>Test your song lyrics and get matching results.</Card.Text>
                    <Link to="/texttest">
                        <Button variant="primary">Test</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}

export default AppCardText;