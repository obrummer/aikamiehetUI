import React, { Component } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import LyricBox from './LyricBox';
import Latency from '../Latency';
import './styles/TextTest.css';

class TextTest extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = { url: '/', data: [], open: false, loading: false }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loading: true, data: [] });

        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        var result = JSON.stringify(formData);
        var endresult = JSON.parse(result);
        var res = encodeURI(endresult.text);

        var url = "https://audd.p.rapidapi.com/findLyrics/?q=" + res;
        console.log(url);
        var data = { url: url };

        fetch("http://loppuprojekti-env.4wv6cxwtgr.eu-central-1.elasticbeanstalk.com/lyrics",
            {
                mode: 'cors',
                method: 'POST',
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                console.log('Success:', response)
                this.setState({ data: response.message.result, loading: false })
            })
    }

    render() {
        const content = this.state.data.map((s, index) =>
            <div key={index}>
                <Card>
                    <Card.Header>Artist: {s.artist}</Card.Header>
                    <Card.Body>
                        <Card.Title>Song title: {s.title}</Card.Title>
                        <div>
                            <LyricBox text={s.lyrics}/>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )

        return (
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1" className="textfield">
                            <Form.Label>Write your lyrics</Form.Label>
                            <Form.Control type="text" placeholder="" ref="text" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Test
                    </Button>
                    </Form>
                    <br />
                    { this.state.loading ? <Latency /> : '' }
                    {content}
                </div>
        );
    }
}

export default TextTest;

