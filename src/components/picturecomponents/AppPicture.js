import React, { Component } from 'react';
import { Jumbotron, Container, Card } from 'react-bootstrap';
import './styles/AppPicture.css'

class AppPicture extends Component {
  render() {
    return (
      <Card className="bg-dark text-white" >
        <Card.Img src="background2.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Do you feel that your song has already been written? Fear not my Friend!<br />TEST YOUR SONG WITH TUNESTERR!</Card.Title>
          <Card.Text>
          
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      // <Jumbotron fluid>
      //   <Container>
      //     <h1>Test your song!</h1>
      //     <p>
      //       Do you feel that your song has already been written? Fear not my Friend!
      //         <br />Test your song to gain certainty in your composing process.
      //       </p>
      //   </Container>
      // </Jumbotron> 
               
  );
  }
}


export default AppPicture;