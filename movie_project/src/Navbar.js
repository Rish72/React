import styled from "styled-components";

//this is a STYLED COMPONENT that has replaced div
const Nav = styled.div`
  box-sizing: border-box;
  color: white;
  height: 50px;
  overflow: hidden;
  width: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    149deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 41%,
    rgba(0, 212, 255, 1) 100%
  );

  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const Title = styled.h1`
  margin: 0;
  transition : all 0.2s;
  &:hover {
    cursor : Pointer;
    opacity : 0.5;
  }
`;

const Cart = styled.div`
  box-sizing: border-box;
  cursor: Pointer;
  position: relative;
`;

const CartImg = styled.img`
  height: 40px;
`;

const CartSpan = styled.span`
  visibility : ${(props) => props.show ? "visible" : "hidden"};
  position: absolute;
  color: black;
  font-size : 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  padding  : 2px 8px;
  text-align: center;
  right: -1px;
  top: -2px;
`;

function NavBar(props) {
  let {cartItemCount} = props; 
  console.log("in nav "+cartItemCount);
  return (
    <>
      <Nav>
        <div>
          <Title>NavBar</Title>
        </div>
        <Cart>
          <CartImg
            src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png"
            alt="Cart"
          />
          <CartSpan color="yellow" show={true}>{cartItemCount}</CartSpan>
        </Cart>
      </Nav>
    </>
  );
}
export default NavBar;
