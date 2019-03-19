import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AppCardHum extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Test by humming</Card.Title>
                    <Card.Text>
                        Test you song by humming and get matching results.
              </Card.Text>
              <Link to="/humrecord"><Button variant="primary">Test</Button></Link>
                </Card.Body>
            </Card>
        );
    }
}

export default AppCardHum;