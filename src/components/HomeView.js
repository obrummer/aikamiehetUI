import React, { Component } from 'react';
import AppPicture from '../components/picturecomponents/AppPicture';
import AppCardHum from '../components/humcomponents/AppCardHum';
import AppCardText from '../components/textcomponents/AppCardText';
import AppCardFile from '../components/filecomponents/AppCardFile';
import AppVideo from '../components/picturecomponents/AppVideo';
import { Container, Row, Col } from 'react-bootstrap';

export default class HomeView extends Component {
    render() {
        return (
            <div>
                <AppPicture />
                {/* <AppVideo /> */}
                <Container>
                    <Row>
                        <Col><AppCardFile /></Col>
                        <Col><AppCardHum /></Col>
                        <Col><AppCardText /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
