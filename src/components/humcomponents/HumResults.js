import React from 'react';
import { Card, Image } from 'react-bootstrap';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/HumResults.css';
import NoMatch from './NoMatch';

// component gets an array of objects as a prop (props.items)
// object composition = { score: int, artist: string, title: string, spotifyResult: false || Object }
// spotifyResult: {performer: String, albumName: String, releaseDate: String, trackUrl: String, imgUrl: String }

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
                                text={`${item.score}%`}
                                styles={{ path: { stroke: '#4cbc40' } }}
                            />
                        </Card.Header>
                        {item.spotifyResult ? (
                            <Card.Body>
                                <Image src={item.spotifyResult.imgUrl || ''} thumbnail />
                                <span> album: {item.spotifyResult.albumName || 'N/A'} </span>
                                <span> released: {item.spotifyResult.releaseDate || 'N/A'} </span>
                                <Card.Link href={item.spotifyResult.trackUrl} target="_blank">
                                    <Image style={{'maxWidth': '35px'}}src="Spotify_Icon.png" />
                                </Card.Link>
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
