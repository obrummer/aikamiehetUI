import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class TextTest extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = { url: '/', data: [] }

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

        var queryurl = "https://api.audd.io/findLyrics/?q=" + res;
        console.log(queryurl);

        fetch(queryurl, { mode: "cors" })
            .then(vastaus => vastaus.json())
            .then(data => {
                this.setState({ data: data });
                console.log(data);
            })
    }

    // state = { url: "https://api.audd.io/findLyrics/?q=I%27m%20waking%20up%20to%20ash%20and%20dust", data: [] }  

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input ref="text" className="text" name="text" />
                        <input type="submit" value="Test" />
                    </form>
                </div>
                {/* <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your lyrics</Form.Label>
                        <Form.Control as="textarea" rows="2" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Test
                    </Button>
                </Form> */}
            </div>
        );
    }
}

export default TextTest;