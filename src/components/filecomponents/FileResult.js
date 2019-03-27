import React from 'react';
import { Card, Image, Row, Col } from 'react-bootstrap';

const FileResult = props => {
    if (!props.item.artist) {
        return <div>No Results</div>;
    }
    return (
        <Card className="text-center">
            <Card.Header>
                Matched <strong>{props.item.title}</strong> by {props.item.artist} &nbsp;
            </Card.Header>
            {props.item.spotifyResult ? (
                <Card.Body>
                    <Row className="hum-result-card-row">
                        <Col md={4}>
                            <Image src={props.item.spotifyResult.imgUrl || ''} thumbnail />
                        </Col>
                        <Col md={4}>
                            <span>
                                {' '}
                                {props.item.spotifyResult.albumName || 'N/A'} <br /> ({props.item.spotifyResult.releaseDate || 'N/A'})
                            </span>
                        </Col>
                        <Col md={4}>
                            Listen on Spotify <br />
                            <Card.Link href={props.item.spotifyResult.trackUrl} target="_blank">
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
};

export default FileResult;
