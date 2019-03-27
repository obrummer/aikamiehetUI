import React, { Component } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { postLyrics } from '../../serviceClient';
import Latency from '../Latency';
import InfoCardText from './InfoCardText';
import './styles/TextTest.css';
import TextResult from './TextResult';

class TextTest extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { url: '/', data: '', loading: false, error: false };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loading: true, data: '', match: '' });

        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }

        this.setState({ match: formData.text});
        var res = encodeURI(formData.text);
        var bodyUrl = 'https://audd.p.rapidapi.com/findLyrics/?q=' + res;
        var bodyData = { url: bodyUrl };

        postLyrics(bodyData)
            .then(res => {
                this.setState({ data: res.result, loading: false });
            })
            .catch(error => {
                this.setState({ data: [], error: true, loading: false });
            });
    }

    render() {
        return (
            <Container>
                <InfoCardText />
                <Row>
                    <Col md={2} />
                    <Col md={8}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="exampleForm.ControlTextarea1" className="textfield">
                                <Form.Label>Write your lyrics</Form.Label>
                                <Form.Control as="textarea" rows="2" type="text" placeholder="" ref="text" required/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Test
                            </Button>
                        </Form>
                    </Col>
                    <Col md={2} />
                </Row>
                <br />
                {this.state.loading ? <Latency /> : <div />}
                {this.state.data ? <TextResult items={this.state.data} match={this.state.match} /> : <div />}
            </Container>
        );
    }
}

export default TextTest;
