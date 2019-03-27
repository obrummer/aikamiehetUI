import React from 'react';
import { Card, Image } from 'react-bootstrap';

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
                    <Image src={props.item.spotifyResult.imgUrl || ''} thumbnail />
                    <span> album: {props.item.spotifyResult.albumName || 'N/A'} </span>
                    <span> released: {props.item.spotifyResult.releaseDate || 'N/A'} </span>
                    <Card.Link href={props.item.spotifyResult.trackUrl} target="_blank">
                        <Image style={{ maxWidth: '35px' }} src="Spotify_Icon.png" />
                    </Card.Link>
                </Card.Body>
            ) : (
                <Card.Body>No Spotify result</Card.Body>
            )}
        </Card>
    );
};

export default FileResult;