import { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 15px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: #a17699;
`;


class InputWithClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handlelastName = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Section>
          <Row label="Name">
            <input value={this.state.name} onChange={this.handleInput} />
          </Row>
          <Row label="Name">
            <input value={this.state.lastname} onChange={this.handlelastName} />
          </Row>
          <h1> hello React {this.state.name +" "+this.state.lastname}</h1>
        </Section>
      </>
    );
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
    </>
  );
}
export default InputWithClass;
