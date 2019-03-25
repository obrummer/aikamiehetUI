import React from 'react';
import NoTextMatch from './NoTextMatch';
import { Card, Col, Row } from 'react-bootstrap';
import LyricBox from './LyricBox';

const TextResult = props => {
    if (props.items.length === 0) {
        return <NoTextMatch />;
    }
    const content = props.items.map((item, index) => (
        <Row key={index}>
            <Col md={2} />
            <Col md={8}>
                <Card>
                    <Card.Header>Artist: {item.artist}</Card.Header>
                    <Card.Body>
                        <Card.Title>Song title: {item.title}</Card.Title>
                        <div>
                            <LyricBox text={item.lyrics} />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={2} />
        </Row>
    ));

    return <div>{content}</div>;
};

export default TextResult;
