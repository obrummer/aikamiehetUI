import React from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/HumResults.css';
import NoMatch from './NoMatch';

class HumResults extends React.Component {
    render() {
        if (this.props.items.length === 0) {
            return <NoMatch />;
        }

        let itemList = this.props.items
            .sort((item1, item2) => item2.score - item1.score)
            .map((item, index) => {
                return (
                    <Card className="text-center" key={index}>
                        <Card.Header>
                            Matched <strong>{item.title}</strong> by {item.artist} &nbsp;
                            <CircularProgressbar
                                initialAnimation={true}
                                percentage={item.score}
                                strokeWidth={10}
                                text={`${item.score}%`}
                                styles={{ path: { stroke: '#4cbc40' }, text: { fill: ' #4cbc40', fontSize: '1.6rem' } }}
                            />
                        </Card.Header>
                        {item.spotifyResult ? (
                            <Card.Body>
                                <Row className="hum-result-card-row">
                                    <Col sm={4}>
                                        <Image src={item.spotifyResult.imgUrl || ''} thumbnail />
                                    </Col>
                                    <Col sm={4}>
                                        {item.spotifyResult.albumName || 'N/A'} <br /> ({item.spotifyResult.releaseDate || 'N/A'})
                                    </Col>
                                    <Col sm={4}>
                                        Listen on Spotify
                                        <Card.Link href={item.spotifyResult.trackUrl} target="_blank">
                                            <Image style={{ maxWidth: '35px' }} src="Spotify_Icon.png" />
                                        </Card.Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        ) : (
                            <Card.Body>No Spotify result</Card.Body>
                        )}
                    </Card>
                );
            });
        return <div>{itemList}</div>;
    }
}

export default HumResults;
