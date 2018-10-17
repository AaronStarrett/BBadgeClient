// import React from "react";
// import Division from "./Division";
// import SuperBowlWinners from './SuperBowlWinners';
// import { Container, Row, Col } from "reactstrap";

// const Splash = props => {
//   return (
//     <Container>
//       <Row>
//         <Col md="6">
//           <Division token={props.sessionToken} />
//         </Col>
//         <Col md="6">
//           <SuperBowlWinners tokens={props.sessionToken} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Splash;
import React from 'react';
// import SuperBowlWinners from './SuperBowlWinners';
// import Division from './Division';
import { Container, Row, Col, Button } from 'reactstrap';
// import './splash.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'


class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Division: true,
      SuperBowlWinners: true,
      itemId: null
    }
  }

  handleClick = () => {
    this.setState({
      Division: false,
      SuperBowlWinners: false,
    })
  }

  handleItemIdClick = (e) => {
    // e.preventDefault()
    this.setState({
      itemId: e.target.id
    });
  }


  render() {
    return (
      <Container className="main">
        {/* <Row>
          <Col md="6">
            <Switch>
              <Route path="/Division"><Division token={this.props.sessionToken} /></Route>
              <Route path="/SuperBowlWinners"><SuperBowlWinners token={this.props.sessionToken} itemId={this.handleItemIdClick} /></Route>
            </Switch>
          </Col>
        </Row> */}
        <Row>
          <Col md="5">
            <hr />
            {
              this.state.Division && <div className="buttons">
                <Button href='/division' onClick={this.handleClick} color="primary">All Teams</Button>

              </div>
            }
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="5">
            {
              this.state.SuperBowlWinners && <div className="buttons">
                <Link to='/SuperBowlWinners'>
                  <Button onClick={this.handleClick} color="primary">Super Bowl Winners</Button>
                </Link>
              </div>
            }
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}

export default Splash;
