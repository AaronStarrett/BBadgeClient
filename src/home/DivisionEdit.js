import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class DivisionEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // id: '',
            Division: "",
            TeamName: "",
            SuperBowls: ""
        };
    }

    componentWillMount() {
        console.log('divisionEdit cwm', this.props)
        this.setState({
            // id: this.props.division.id,
            Division: this.props.division.Division,
            TeamName: this.props.division.TeamName,
            SuperBowls: this.props.division.SuperBowls
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        let token = localStorage.getItem('token')
        let eventId = localStorage.getItem('teamId')
        fetch(`http://localhost:3001/division/update/${eventId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(this.state),

        }
        )
        // this.props.update(event, this.state)
        event.preventDefault();
        // console.log(this.state)
        this.props.closeModal();
        window.location.reload()
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader>
                        Log a Team!
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="Division">Update Division</Label>
                                <Input type="text" name="Division" value={this.state.Division}
                                    placeholder="Enter Info" onChange={this.handleChange} />
                                <Label for="TeamName">Update Team Name</Label>
                                <Input type="text" name="TeamName" value={this.state.TeamName}
                                    placeholder="Enter Info" onChange={this.handleChange} />
                                <Label for="SuperBowls">Update SuperBowls</Label>
                                <Input type="text" name="SuperBowls" value={this.state.SuperBowls}
                                    placeholder="Enter Info" onChange={this.handleChange} />
                            </FormGroup>
                            <Button href='/Division' onClick={this.handleSubmit} type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>

                </Modal >
            </div >
        )
    }
}

export default DivisionEdit;