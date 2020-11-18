import React, {Component} from "react";
import "./App.css";
import API from "./utils/API"

import Container from "./components/Container";
import TableContainer from "./components/TableContainer";
import Wrapper  from "./components/Wrapper"


class App extends Component {
  state = {}

  render(){
    return (
      <div>
        <Wrapper>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Directory of Employees</h1>
          <TableContainer />
  
        </Container>
        </Wrapper>
      </div>
    );
  }
  

}

export default App;
