import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

class Latency extends Component {
    render() {
        return (
            <div>
                <Spinner animation="border" variant="primary" size="lg" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }
}

export default Latency;