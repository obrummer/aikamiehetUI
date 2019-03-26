import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import Parser from 'html-react-parser';
import './styles/LyricBox.css';

class LyricBox extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            matched: 'mountain high'
        };
    }

    render() {
        const { open } = this.state;

        let matchString = new RegExp(this.props.toMatch, "gi")
        let matched = this.props.text.replace(matchString, "<span>" + this.props.toMatch + "</span>");

        return (
            <div>
                <Button onClick={() => this.setState({ open: !open })} aria-controls="example-collapse-text" aria-expanded={open}>
                    Get lyrics
                </Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">{Parser(matched)}</div>
                </Collapse>
            </div>
        );
    }
}

export default LyricBox;
