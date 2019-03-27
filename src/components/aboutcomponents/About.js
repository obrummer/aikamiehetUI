import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Latency from '../Latency';
import Aboutstats from './Aboutstats';
import './styles/about.css';

class About extends Component {

    state = { data: [] };

    componentDidMount() {
        fetch("http://loppuprojekti-env.4wv6cxwtgr.eu-central-1.elasticbeanstalk.com/about",
            {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                console.log('Statistics retrieved successfully', response);
                this.setState({ data: response });
            })
    }

    render() {

        return (
            <Row>
            <Col md={3} />
            <Col md={6}>
                <Card>
                    <Card.Header>About Tunesterr</Card.Header>
                    <Card.Body>
                        <p>Tunesterr is an awesome application which helps you to validate if your song/composition would be an unintentional plagiarism</p>
                        <p>It offers you three types of tests:</p>
                        <ul>
                            <li>Test Audiofile - You can upload a audiofile and the service tries to match it...</li>
                            <li>Test by Humming - You can record a hum and the service tries to match it...</li>
                            <li>Test Your Lyrics - You can enter a text and the service tries to match it...</li>
                        </ul>
                        <p>...with over <span>42,000,000</span> songs in the database.</p>
                        <p>The results of audiofile match includes the links to the matched songs in Spotify. The results of hum match includes also the match score (percentage) for all the matched songs. The results of matched lyrics display all the lyrics of all the matched songs.</p>
                        {this.state.data.length === 0 ? <Latency /> : <Aboutstats data={this.state.data}/>}
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3} />
        </Row>

        );
    }
}

export default About;