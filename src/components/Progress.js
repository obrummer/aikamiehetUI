import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Progress.css';

const Progress = props => {
    return <ProgressBar min={0} max={20} now={props.now} label={`${props.label} sec`} style={{ width: '100%' }} />;
};

export default Progress;
