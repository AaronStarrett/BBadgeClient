import React, { Component } from "react";
import DivisionCreate from "./DivisionCreate";
import DivisionTable from "./DivisionTable";
import { Container, Row, Col } from "reactstrap";
import DivisionEdit from "./DivisionEdit";


class Division extends Component {
    constructor(props) {
        super(props)
        this.state = {
            division: [],
            updatePressed: false,
            divisionToUpdate: {},
            createPressed: false,
            divisionToCreate: {}
        }
    }

    closeModal = (event) => {
        this.setState({ updatePressed: false })
    };

    // divisionUpdate = (event, division) => {
    //     fetch(`http://localhost:3001/division/update`, {
    //         method: 'PUT',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': this.props.token
    //         }),
    //         body: JSON.stringify({
    //             id: division.id,
    //             Division: division.Division,
    //             TeamName: division.TeamName,
    //             SuperBowls: division.SuperBowls,
    //         })
    //     })
    //         .then((res) => {
    //             console.log(res.json())
    //             this.setState({ updatePressed: false })
    //             this.fetchDivision();
    //         })
    // }

    // divisonCreate = (event, division) => {
    //     console.log(division)
    //     fetch(`http://localhost:3001/division/create`, {
    //         method: 'POST',
    //         body: JSON.stringify(division),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': this.props.token
    //         }),
    //     })
    //         .then((res) => {
    //             this.setState({ createPressed: false })
    //             this.fetchDivision();
    //         })
    // }

    // divisionUpdate = (event, division) => {
    //     console.log(division)
    //     fetch(`http://localhost:3001/division/update/${division.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(division),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': this.props.token
    //         }),
    //     })
    //         .then((res) => {
    //             this.setState({ updatePressed: false })
    //             this.fetchDivision();
    //         })
    // }

    setCreatedDivision = (event, division) => {
        this.setState({
            createPressed: true,
            divisionToCreate: division
        })
    }

    setUpdatedDivision = (event, division) => {
        this.setState({
            updatePressed: true,
            divisionToUpdate: division
        })
        localStorage.setItem("teamId", event.target.id)
    }



    fetchDivision = () => {
        fetch("http://localhost:3001/division/pull", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({ division: logData })
            })
    }

    divisionDelete = (event) => {
        fetch(`http://localhost:3001/division/${event.target.id}`, {
            method: "DELETE",
            body: JSON.stringify({ log: { id: event.target.id } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        }).then((res) => this.fetchDivision());
    };

    componentDidMount() {
        this.fetchDivision();
    }



    render() {
        const division =
            this.state.division.length >= 1 ? (
                <DivisionTable
                    create={this.setCreatedDivision}
                    division={this.state.division}
                    delete={this.divisionDelete}
                    update={this.setUpdatedDivision}
                />
            ) : (
                    <h2>Log a Division to see the Teams!</h2>
                );

        return (
            <Container>

                <Col md="4">
                    {this.state.createPressed ? <DivisionCreate t={this.state.createPressed} division={this.state.divisionToCreate} closeModal={this.closeModal} />
                        : <div></div>
                    }

                </Col>
                <Col md="8">
                    {division}
                </Col>
                <Col md="12">
                    {this.state.updatePressed ? <DivisionEdit t={this.state.updatePressed} division={this.state.divisionToUpdate} closeModal={this.closeModal} />
                        : <div></div>
                    }
                </Col>
            </Container >
        );
    }
}


// {/*t={this.state.updatePressed}*/}
export default Division;
