import React from 'react';
import { Card } from 'react-bootstrap';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/HumResults.css';
import NoMatch from './ErrorComponent';

// component gets an array of objects as a prop (props.items)
// object composition = { score: int, artist: string, title: string }

const HumResults = props => {
    if (props.items.length === 0) {
        return <NoMatch />;
    }
    let itemList = props.items.map((item, index) => {
        return (
            <Card key={index}>
                <Card.Title>
                    {item.title} <CircularProgressbar initialAnimation={true} percentage={item.score} text={`${item.score}%`} />
                </Card.Title>
                <Card.Subtitle>by {item.artist}</Card.Subtitle>
            </Card>
        );
    });
    return <div>{itemList}</div>;
};

export default HumResults;
