import React, { Component } from 'react';
import Latency from '../Latency';
import Progress from '../Progress';


class FileTest extends Component {

    state = { progressTime: 10, progressLabel: 0 };

    componentDidMount() {
        setInterval(this.increaseProgress, 100)
        setInterval(this.increaseLabel, 1000)   
    }

    increaseProgress = () => {
        this.setState({ progressTime: this.state.progressTime + 0.1 });
    }

    increaseLabel = () => {
        this.setState({ progressLabel: this.state.progressLabel + 1 });
    }

    render() {
        return (
            <div>
                <p>File testausta</p>
                <Latency />
                <Progress now={this.state.progressTime} label={ this.state.progressLabel}  />
            </div>
        );
    }
}

export default FileTest;