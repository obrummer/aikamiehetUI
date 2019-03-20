import React from 'react';
import Button from 'react-bootstrap/Button';
import { postFile } from '../../serviceClient';

export default class HumRecord extends React.Component {
    state = { mediaRecorder: null };

    componentDidMount() {
        if (!navigator.mediaDevices) {
            alert('getUserMedia not supported');
        }
        let blob,
            chunks = [];
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            this.setState({ mediaRecorder: new MediaRecorder(stream) });
            let mutableRecorder = this.state.mediaRecorder;
            mutableRecorder.onstop = e => {
                blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
                postFile(blob)
                    .then(res => {
                        console.log(res);
                        chunks = [];
                    })
                    .catch(err => console.error(err));
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
            <div>
                <Button variant="dark" onClick={this.onStart}>
                    Record
                </Button>
                <Button variant="dark" onClick={this.onStop}>
                    Stop
                </Button>
            </div>
        );
    }
}

const logger = rec => {
    console.log('====== ' + rec.state + ' ======');
};
