import React from 'react';
import { postFile } from '../../serviceClient';
import { Container, Col, Row } from 'react-bootstrap';
import './styles/HumRecord.css';
import HumResults from './HumResults';
import ErrorComponent from './ErrorComponent';
import Progress from '../Progress';
import Latency from '../Latency';
import InfoCardHum from './InfoCardHum';

export default class HumRecord extends React.Component {
    state = {
        mediaRecorder: null,
        isSearching: false,
        isRecording: false,
        results: '',
        error: false,
        error_message: '',
        progressTime: 0,
        progressLabel: 0,
        recInterval: null,
        recLabel: null
    };

    componentDidMount() {
        if (!navigator.mediaDevices) {
            this.setState({ error: true, error_message: 'getUserMedia not supported on this browser' });
            return;
        }
        let blob,
            chunks = [];
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(stream => {
                this.setState({ mediaRecorder: new MediaRecorder(stream) });
                let mutableRecorder = this.state.mediaRecorder;
                mutableRecorder.onstop = e => {
                    this.setState({ isSearching: true, isRecording: false });
                    blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
                    chunks = [];
                    postFile(blob, 'hum')
                        .then(res => {
                            this.setState({ results: res, isSearching: false });
                        })
                        .catch(error => {
                            console.error(error);
                            this.setState({
                                isSearching: false,
                                isRecording: false,
                                error: true,
                                error_message: error.message
                            });
                        });
                };
                mutableRecorder.ondataavailable = e => {
                    chunks.push(e.data);
                };
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    isSearching: false,
                    isRecording: false,
                    error: true,
                    error_message: 'Mediarecorder failed to start..'
                });
            });
    }

    componentWillUnmount() {
        this.setState({ mediaRecorder: null, isSearching: false, isRecording: false });
        clearInterval(this.state.recInterval);
        clearInterval(this.state.recLabel);
    }

    onStart = () => {
        if (!this.state.mediaRecorder || this.state.mediaRecorder.state === 'recording') {
            console.log('Mediarecorder is not defined or already recording');
            return;
        }
        this.state.mediaRecorder.start();
        this.setState({
            results: '',
            isRecording: true,
            progressTime: 0,
            progressLabel: 0,
            recInterval: setInterval(this.increaseProgress, 100),
            recLabel: setInterval(this.increaseLabel, 1000),
            recMaxTime: setTimeout(() => {
                this.onStop();
                clearInterval(this.state.recInterval);
                clearInterval(this.state.recLabel);
            }, 20 * 1000)
        });
        logger(this.state.mediaRecorder);
    };

    onStop = () => {
        if (!this.state.mediaRecorder || this.state.mediaRecorder.state === 'inactive') {
            console.log('Mediarecorder is not defined or already inactive');
            return;
        }
        clearInterval(this.state.recInterval);
        clearInterval(this.state.recLabel);
        clearTimeout(this.state.recMaxTime);
        this.state.mediaRecorder.stop();
        logger(this.state.mediaRecorder);
    };

    increaseProgress = () => {
        this.setState({ progressTime: this.state.progressTime + 0.1 });
    };

    increaseLabel = () => {
        this.setState({ progressLabel: this.state.progressLabel + 1 });
    };

    render() {
        return (
            <Container>
                <InfoCardHum />
                <Row>
                    <Col md={3} />
                    <Col md={6}>
                        <i className={this.state.isRecording ? 'fas fa-circle fa-3x Rec' : 'fas fa-circle fa-3x'} onClick={this.onStart} />
                        <i className="fa fa-stop fa-3x" onClick={this.onStop} />
                    </Col>
                    <Col md={3} />
                </Row>
                <Row>
                    <Col md={3} />
                    <Col md={6}>
                        <Progress now={this.state.progressTime} label={this.state.progressLabel} />
                    </Col>
                    <Col md={3} />
                </Row>
                <Row>
                    <Col md={3} />
                    <Col md={6}>
                        {this.state.isSearching ? <Latency /> : <div />}
                        {this.state.error ? <ErrorComponent msg={this.state.error_message} /> : <div />}
                        {this.state.results ? <HumResults items={this.state.results} /> : <div />}
                    </Col>
                    <Col md={3} />
                </Row>
            </Container>
        );
    }
}

const logger = rec => {
    console.log('====== ' + rec.state + ' ======');
};
