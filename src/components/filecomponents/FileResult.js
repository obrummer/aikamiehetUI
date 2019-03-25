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

// results found:
// {
//     "artist": "Toto",
//     "title": "Hold the Line",
//     "album": "Greatest Hits: 40 Trips Around The Sun",
//     "release_date": "2018-02-09",
//     "spotifyResult": {
//         "albumName": "Toto"
//         "imgUrl": "https://i.scdn.co/image/d6d856563f9ed3d3cc4068a0828a54a7ad4403b3"
//         "performer": "Toto"
//         "releaseDate": "1978-10-10"
//         "song": "Hold the Line"
//         "trackUrl": "https://open.spotify.com/track/4aVuWgvD0X63hcOCnZtNFA"
//     }
// }

// no results: null
