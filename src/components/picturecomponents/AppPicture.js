import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './styles/AppPicture.css'

class AppPicture extends Component {
    render() {
        return (
          <Jumbotron fluid>
          <Container>
            <h1>Test your song!</h1>
            <p>
              Do you feel that your song has already been written? Fear not my Friend! 
              <br />Test your song to gain certainty in your composing process.
            </p>
          </Container>
        </Jumbotron> 
               
  );
}
}


export default AppPicture;