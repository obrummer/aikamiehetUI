import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class TextTest extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = { url: '/', data: [], open: false }

    // componentDidMount = () => {
    //     this.gettextrecognition();
    // }
    // gettextrecognition = () => {
    //     fetch(this.state.url, { mode: "cors" })
    //         .then(vastaus => vastaus.json())
    //         .then(data => {
    //             this.setState({ data: data });
    //             console.log(data);
    //         })
    // }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        var result = JSON.stringify(formData);
        var endresult = JSON.parse(result);
        var res = encodeURI(endresult.text);

        var url = "https://audd.p.rapidapi.com/findLyrics/?q=" + res;
        console.log(url);
        var data = { url: url};

        fetch("http://loppuprojekti-env.4wv6cxwtgr.eu-central-1.elasticbeanstalk.com/lyrics", 
        {
            mode: 'cors',
            method: 'POST', 
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(res => res.json())
          .then(response => 
            console.log('Success:', response))
          .catch(error => 
            console.error('Error:', error));
    }

    // state = { url: "https://api.audd.io/findLyrics/?q=I%27m%20waking%20up%20to%20ash%20and%20dust", data: [] }  

    render() {
        const { open } = this.state;

        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input ref="text" className="text" name="text" />
                        <input type="submit" value="Test" />
                    </form>
                </div>
                <div>
                    <Button onClick={() => this.setState({ open: !open })}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    >
                    click
                    </Button>
                    <Collapse in={this.state.open}>
                    <div id="example-collapse-text">
                    Lorem ipsum dalla-dalla-daa
                    </div>
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default TextTest;