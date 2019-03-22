import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class Progress extends Component {
    
    render() {

        return (
            <div>
                <ProgressBar animated now={this.props.now} label={`${this.props.label}sec`} />
            </div>
        );
    }
}

export default Progress;