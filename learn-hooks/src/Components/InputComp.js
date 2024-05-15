import styled from "styled-components";

import { useState } from "react";

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

  const [name , setName] = useState("");  //initailly ye naam name ko milega input fields ko set krne ke bd jo bhi data aayega vo name me assign hoga
  const [lastname , setLastName] = useState(""); 

  return (
    <>
      <Section>
        <Row label="Name">
          <input value={name} onChange={(e) => setName(e.target.value)}/>
        </Row>
        <Row label="Name">
          <input value={lastname} onChange={e => setLastName(e.target.value)}/>
        </Row>
        <h1> hello React {name+" "+lastname} </h1>
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
