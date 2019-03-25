import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Progress.css';

class Progress extends Component {
    
    render() {

        return (
            <div>
                <ProgressBar min={0} max={20} now={this.props.now} label={`${this.props.label} sec`} />
            </div>
        );
    }
}

export default Progress;