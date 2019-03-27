export async function postFile(data, path) {
    try {
        const formData = new FormData();
        formData.append('audiofile', data);
        const options = {
            method: 'POST',
            mode: 'cors',
            mimeType: 'multipart/form-data',
            body: formData
        };
        let res = await fetch('http://loppuprojekti-env.4wv6cxwtgr.eu-central-1.elasticbeanstalk.com/' + path, options);
        let jsonRes = await res.json();
        if (jsonRes.success) {
            return jsonRes.message;
        } else {
            throw new Error(jsonRes.message);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// nomatch result is an empty array
export async function postLyrics(bodyData) {
    const options = {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    };
    try {
        let result = await fetch('http://loppuprojekti-env.4wv6cxwtgr.eu-central-1.elasticbeanstalk.com/lyrics', options);
        let jsonRes = await result.json();
        if (jsonRes.success) {
            return jsonRes.message;
        } else {
            throw new Error(jsonRes.message);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function mock(data) {
    return mockAnswerTrue;
}

const mockAnswerTrue = [
    {
        score: 68,
        artist: 'Incubus',
        title: 'Drive',
        spotifyResult: {
            performer: 'Incubus',
            albumName: 'Make Yourself',
            releaseDate: '2007-10-30',
            trackUrl: 'https://open.spotify.com/track/7nnWIPM5hwE3DaUBkvOIpy',
            imgUrl: 'https://i.scdn.co/image/a327aa78dd233419d51f5d9aee09f1b6e3b04d30'
        }
    },
    {
        score: 87,
        artist: 'Adele',
        title: 'Someone Like You',
        spotifyResult: {
            performer: 'Adele',
            albumName: '21',
            releaseDate: '2011-01-19',
            trackUrl: 'https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB',
            imgUrl: 'https://i.scdn.co/image/7ace39dafcac6a253a026ffa473e0f14389fa1d8'
        }
    },
    { score: 6, artist: 'notfound', title: 'notnotfound', spotifyResult: false }
];
