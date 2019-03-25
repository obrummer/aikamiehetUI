import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';

class LyricBox extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Button onClick={() => this.setState({ open: !open })} aria-controls="example-collapse-text" aria-expanded={open}>
                    Get lyrics
                </Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">{this.props.text}</div>
                </Collapse>
            </div>
        );
    }
}

export default LyricBox;
