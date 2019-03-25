import React, { Component } from 'react';

class About extends Component {

    state = {  };

    componentDidMount() {
        fetch("http://loppuprojekti-env.4wv6cxwtgr.eu-central-1.elasticbeanstalk.com/about",
        {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log('Statistics retrieved successfully', response);
            this.setState({data: response});
        })
    }

    functionName = () => {
        this.setState({  });
    }

    render() {

        console.log(this.state.data);

        // const statistics = this.state.data.map((s, index) =>
        // <div key={index}>
        //     <Card>
        //         <Card.Header>Artist: {s.artist}</Card.Header>
        //         <Card.Body>
        //             <Card.Title>Song title: {s.title}</Card.Title>
        //             <div>
        //                 <LyricBox text={s.lyrics}/>
        //             </div>
        //         </Card.Body>
        //     </Card>
        // </div>
        // )

        return (
            <div>
                <h3>About Test Your Song</h3>
                <p>The Test Your Song is an awesome application which helps you to test if your awesome composition might be an unintentional plagiarism</p>
                <p>It offers you three types of tests:</p>
                <ul>
                    <li>Test Audiofile - You can upload a audiofile and the service tries to match it...</li>
                    <li>Test by Humming - You can record a hum and the service tries to match it...</li>
                    <li>Test Your Lyrics - You can enter a text and the service tries to match it...</li>
                </ul>
                ...with over 42,000,000 songs in the database.
                <p>The results of audiofile match includes the links to the matched songs in Spotify. The results of hum match includes also the match score (percentage) for all the matched songs. The results of matched lyrics display all the lyrics of all the matched songs.</p>
                <p>The Track Records of The Service</p>
                Audiofile tests/match found/no match<br />
                {this.state.audiocount}
                <br />
                Hum recordings/match found/no match<br />
                {this.state.humcount}
                <br />
                Lyrics sent/match found/no match<br />
                {this.state.lyricscount}
            </div>
        );
    }
}

export default About;