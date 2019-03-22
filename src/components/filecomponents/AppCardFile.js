import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import filepic from './styles/filepic.png';

class AppCardFile extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={filepic} />
                <Card.Body>
                    <Card.Title>Test audiofile</Card.Title>
                    <Card.Text>
                        Test your produced audiofile and get matching results.
              </Card.Text>
              <Link to="/filetest"><Button variant="primary">Test</Button></Link>
                </Card.Body>
            </Card>
        );
    }
}

export default AppCardFile;
