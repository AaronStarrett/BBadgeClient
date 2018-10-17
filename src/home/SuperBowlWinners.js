import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import SBOnly from "./Team";

class SuperBowlWinners extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SuperBowlTable: [],
        }

    }
    fetchSuperBowlTable = () => {
        fetch("http://localhost:3001/sbtable/pullsbtable", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.setState({ SuperBowlTable: logData })
            })
    }

    componentDidMount() {
        this.fetchSuperBowlTable();
    }

    render() {
        const SuperBowlTable =
            this.state.SuperBowlTable.length >= 1 ? (
                <SBOnly
                    SuperBowlTable={this.state.SuperBowlTable}
                />
            ) : (
                    <h2>SuperBowl Winners</h2>
                );

        return (
            <Container>
                <Row>
                    <Col md="6">
                        {SuperBowlTable}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SuperBowlWinners;