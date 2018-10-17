import React from "react";
import { Table, Button } from "reactstrap";

const DivisionTable = (props) => {

  return (
    <div className="tableBackground">
      <h3>Football</h3>
      <hr />
      <Table responsive>
        <thead>
          <tr>
            <th>Division</th>
            <th>TeamName</th>
            <th>SuperBowls</th>
          </tr>
        </thead>
        <tbody>
          {props.division.map((division, id) => {
            return (
              <tr key={id}>
                <td scope="row">
                  {division.Division}</td>
                <td>{division.TeamName}</td>
                <td>{division.SuperBowls}</td>
                <td>
                  <Button
                    id={division.id}
                    onClick={props.delete}
                    color="danger"
                  >
                    Delete
                  </Button>
                  <Button
                    id={division.id}
                    onClick={(event) => { props.update(event, division) }}
                    color="warning"
                  >
                    Update
                  </Button>
                  <Button
                    id={division.id}
                    onClick={(event) => { props.create(event, division, division.id) }}
                    color="info"
                  >
                    Create
                  </Button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </Table>
    </div>
  );
};

export default DivisionTable;
