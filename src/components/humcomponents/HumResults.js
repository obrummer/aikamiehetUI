import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/HumResults.css';
import NoMatch from './NoMatch';

// component gets an array of objects as a prop (props.items)
// object composition = { score: int, artist: string, title: string }

class HumResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.items.length === 0) {
            return <NoMatch />;
        }

        let itemList = this.props.items.map((item, index) => {
            return (
                <Card className="text-center" key={index}>
                    <Card.Header>
                        Matched <strong>{item.title}</strong> by {item.artist} &nbsp;
                        <CircularProgressbar
                            initialAnimation={true}
                            percentage={item.score}
                            text={`${item.score}%`}
                            styles={{ path: { stroke: '#4cbc40' } }}
                        />
                    </Card.Header>
                    <Card.Body>
                        <Button variant="secondary">Check from Spotify</Button>
                    </Card.Body>
                </Card>
            );
        });
        return <div>{itemList}</div>;
    }
}

export default HumResults;
