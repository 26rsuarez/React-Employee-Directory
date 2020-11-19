import React, {Component} from "react";
import "./App.css";
import API from "./utils/API"

import Container from "./components/Container";
import Row from "./components/Row";
import Wrapper  from "./components/Wrapper"
import Filter from "./components/Filter"


class App extends Component {
  //the state are the employees
  state = {
    results: [],
    filter: ""
  }

  //check to see if employees are loaded
  componentDidMount() {
    this.getEmployees();
  }

  //employees are retrieved from the api call
  getEmployees = () => {
    API.requestUsers()
    .then(res => {
      console.log(res);
      this.setState({results: res.data.results})})
    .catch(err => console.log(err))
  }

  sortEmployees (column) {
    //sorts each column alphabetacally, if two employees have the same name it then looks at last name. then updates the state
    if (column === "first") {
      const sorted = this.state.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : (a.name.first === b.name.first) ? ((a.name.last > b.name.last) ? 1 : -1) : -1 )
      this.setState({results: sorted})
    } else if(column === "last") {
      const sorted = this.state.results.sort((a, b) => (a.name.last > b.name.last) ? 1 : (a.name.last === b.name.last) ? ((a.name.first > b.name.first) ? 1 : -1) : -1 )
      this.setState({results: sorted})
    } else if (column === "email"){
      const sorted = this.state.results.sort((a, b) => (a.email > b.email) ? 1 : -1)
      this.setState({results: sorted})
    } else {
      const sorted = this.state.results.sort((a, b) => (a.location.state > b.location.state) ? 1 : -1)
      this.setState({results: sorted})
    }
      
  }

  filterList(state) {
    console.log(state)
    const filtered = this.state.results.filter(result => result.location.state === state);
    console.log(filtered)
    this.setState({results: filtered})
    
  }

  handleInputChange = event => {
    this.setState({
      filter: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.filterList(this.state.filter)
  }

  render(){
    return (
      <div>
        <Wrapper>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Directory of Employees</h1>
          <Filter 
            value={this.state.filter}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            results={this.state.results}
          />
          <table className="table table-striped">
            <thead>
              <tr>
              <th scope="col">First<i className="fas fa-sort" onClick={()=>this.sortEmployees("first")}></i></th>
              <th scope="col">Last<i className="fas fa-sort" onClick={()=>this.sortEmployees("last")}></i></th>
              <th scope="col">Email<i className="fas fa-sort" onClick={()=>this.sortEmployees("email")}></i></th>
              <th scope="col">State<i className="fas fa-sort" onClick={()=>this.sortEmployees("state")}></i></th>
              </tr>
            </thead>
          <tbody>
            {this.state.results.map(employee => (
              <Row 
                first={employee.name.first}
                last={employee.name.last}
                email={employee.email}
                state={employee.location.state}
              />
            ))}
          </tbody>
    </table>
  
        </Container>
        </Wrapper>
      </div>
    );
  }
  

}

export default App;
