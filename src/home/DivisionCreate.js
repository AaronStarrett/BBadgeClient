import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class DivisionCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Division: "",
      TeamName: "",
      SuperBowls: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/division/create`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": this.props.token
      })
    })
    window.location.reload()
  }

  render() {
    return (
      <div>
        <h3>NFL and Fantasy League SuperBowl Winners:</h3>
        <hr />
        <Modal isOpen={true} >
          <ModalHeader>
            Log a Team!
                    </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="Division">Create Division</Label>
                <Input type="text" name="Division" value={this.state.Division}
                  placeholder="Enter Info" onChange={this.handleChange} />
                <Label for="TeamName">Creat Team Name</Label>
                <Input type="text" name="TeamName" value={this.state.TeamName}
                  placeholder="Enter Info" onChange={this.handleChange} />
                <Label for="SuperBowls">Create SuperBowls</Label>
                <Input type="text" name="SuperBowls" value={this.state.SuperBowls}
                  placeholder="Enter Info" onChange={this.handleChange} />
              </FormGroup>
              <Button href='/Division' onClick={this.handleSubmit} type="submit" color="primary"> Submit </Button>
            </Form>
          </ModalBody>

        </Modal >
      </div>
    );
  }
}

export default DivisionCreate;
