import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { postFile } from '../../serviceClient';
import Latency from '../Latency';
import FileErrorComponent from './FileErrorComponent';
import FileResult from './FileResult';
import './styles/FileTest.css';

class FileTest extends Component {
    state = { file: null, isSearching: false, error: false, error_message: '', results: '' };

    handleSubmit = async e => {
        e.preventDefault();
        if (this.state.file.size > 1.5 * 1000000) { // client side validation for courtecy
            this.setState({ error: true, error_message: 'Max filesize 1MB, selected file ' + (this.state.file.size / 1000000).toFixed(2) + 'MB' });
            return;
        }
        if (!this.state.file) {
            this.setState({ error: true, error_message: 'No file selected!' });
            return;
        }
        this.setState({ isSearching: true, results: '', error: false, error_message: '' });
        postFile(this.state.file, 'file')
            .then(res => {
                this.setState({ results: res, isSearching: false });
            })
            .catch(err => {
                this.setState({ error: true, error_message: 'File upload failed: ' + err.message, isSearching: false });
            });
    };

    handleFileChange = e => {
        this.setState({ file: e.target.files[0] });
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col md={2} />
                    <Col md={8}>
                        <Card>
                            <Card.Header>Test your produced song</Card.Header>
                            <Card.Body>
                                <Card.Text>Test your song by sending .mp3 or .ogg -file and get matching results.</Card.Text>
                            </Card.Body>
                            <Form onSubmit={this.handleSubmit} className="file-form">
                                <Form.Group controlId="file-upload-field">
                                    <Form.Control type="file" placeholder="File" onChange={this.handleFileChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col md={2} />
                </Row>
                <Row>
                    <Col md={2} />
                    <Col md={8}>
                        {this.state.error ? <FileErrorComponent msg={this.state.error_message} /> : <div />}
                        {this.state.isSearching ? <Latency /> : <div />}
                        {this.state.results ? <FileResult item={this.state.results} /> : <div />}
                    </Col>
                    <Col md={2} />
                </Row>
            </Container>
        );
    }
}

export default FileTest;
