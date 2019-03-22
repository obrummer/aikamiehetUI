import React from 'react';
import { postFile } from '../../serviceClient';
import { Container, Col, Row } from 'react-bootstrap';
import './styles/HumRecord.css';
import HumResults from './HumResults';
import ErrorComponent from './ErrorComponent';

export default class HumRecord extends React.Component {
    state = { mediaRecorder: null, isSearching: false, results: '', error: false };

    componentDidMount() {
        if (!navigator.mediaDevices) {
            alert('getUserMedia not supported');
            return;
        }
        let blob,
            chunks = [];
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            this.setState({ mediaRecorder: new MediaRecorder(stream) });
            let mutableRecorder = this.state.mediaRecorder;
            mutableRecorder.onstop = e => {
                this.setState({ isSearching: true });
                blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
                chunks = [];
                postFile(blob)
                    .then(res => {
                        this.setState({ results: res });
                    })
                    .catch(error => {
                        this.setState({ error: true });
                    });
            };
            mutableRecorder.ondataavailable = e => {
                chunks.push(e.data);
            };
        });
    }

    componentWillUnmount() {
        this.setState({ mediaRecorder: null });
    }

    onStart = () => {
        if (!this.state.mediaRecorder || this.state.mediaRecorder.state === 'recording') {
            console.log('Mediarecorder is not defined or already recording');
            return;
        }
        this.state.mediaRecorder.start();
        this.setState({ results: '' });
        logger(this.state.mediaRecorder);
    };

    onStop = () => {
        if (!this.state.mediaRecorder || this.state.mediaRecorder.state === 'inactive') {
            console.log('Mediarecorder is not defined or already inactive');
            return;
        }
        this.state.mediaRecorder.stop();
        logger(this.state.mediaRecorder);
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col md={3} />
                    <Col md={6}>
                        <button className="round-button" onClick={this.onStart}>
                            <i className="fa fa-play fa-2x" />
                        </button>
                        <button className="round-button" onClick={this.onStop}>
                            <i className="fa fa-stop fa-2x" />
                        </button>
                    </Col>
                    <Col md={3} />
                </Row>
                <Row>
                    <Col md={3} />
                    <Col md={6}>{this.state.error ? <ErrorComponent /> : <div />}</Col>
                    <Col md={3} />
                </Row>
                <Row>
                    <Col md={3} />
                    <Col md={6}>{this.state.results ? <HumResults items={this.state.results} /> : <div />}</Col>
                    <Col md={3} />
                </Row>
            </Container>
        );
    }
}

const logger = rec => {
    console.log('====== ' + rec.state + ' ======');
};
