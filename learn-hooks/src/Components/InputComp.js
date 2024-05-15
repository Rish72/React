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

function InputComp() {
  return (
    <>
      <Section>
        <Row label="Name">
          <input />
        </Row>
        <Row label="Name">
          <input />
        </Row>
        <h1> hello React</h1>
      </Section>
    </>
  );
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
      <hr />
    </>
  );
}
export default InputComp;
