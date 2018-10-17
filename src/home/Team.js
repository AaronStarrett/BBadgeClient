import React, { Component } from 'react';
import { Table, Button } from "reactstrap";

const SBOnly = (props) => {

    return (
        <div>
            <h3>SuperBowl Winners Only</h3>
            <hr />
            <Table responsive>
                <thead>
                    <tr>
                        <th>SuperBowlTeams</th>
                        <th>SuperBowlWins</th>
                    </tr>
                </thead>
                <tbody className="sbTable">
                    {props.SuperBowlTable.map((SuperBowlTable, id) => {
                        return (
                            <tr key={id}>
                                <td scope="row">{SuperBowlTable.SuperBowlTeams}</td>
                                <td>{SuperBowlTable.SuperBowlWins}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
};


export default SBOnly;