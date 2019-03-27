import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './styles/AppPicture.css';

class AppPicture extends Component {
    render() {
        return (
            <Card className="bg-dark text-white" id="imagecard">
                <Card.Img src="background2.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>
                        Do you feel that your song has already been written? Fear not my Friend!
                        <br />
                        TEST YOUR SONG WITH TUNESTERR!
                    </Card.Title>
                    <Card.Text />
                </Card.ImgOverlay>
            </Card>
        );
    }
}

export default AppPicture;
