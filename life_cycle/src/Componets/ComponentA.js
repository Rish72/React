import { Component } from "react";
import ComponentB from "./Componets/ComponentB";
class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Component A",
      userData  : []
    };
    console.log("Component A Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedstate");
    return null;
  }

  componentDidMount() { 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(data => {
        this.setState({
            userData : data
        })
    });
    console.log("Component A component did mount");
  }

  render() {
    console.log(this.state.userData);
    console.log("Component A render");
    return (
      <>
        <h1>{this.state.name}</h1>

        <ComponentB userData={this.state.userData}/>
        <ul>
            {this.state.userData.map((data) => {
             return(
                <li>{data.name}</li>
            )
            })}
        </ul>
      </>
    );
  }
}

export default ComponentA;
