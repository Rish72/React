import { Component } from "react";

class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB",
    };
    console.log("ComponentB Constructor");
  }
  static getDerivedStateFromProps() {
    console.log("ComponentB  getDerivedstate");
    return null;
  }

  componentDidMount() {
    console.log("ComponentB component did mount");
  }

  render() {
    const {userData} =  this.props;
    console.log(userData[0]);
    console.log("ComponentB render");
    return (
      <>
        <h3>{this.state.name}</h3>
        <table>
           {
            userData.map((u) => (
                <tr>
                    <td>{u.name}</td>
                </tr>
            ))
           }
        </table>
      </>
    );
  }
}

export default ComponentB;
