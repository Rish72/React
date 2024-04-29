import styled from "styled-components";
import NavStyle from "./NavBar.module.css"

//this is a STYLED COMPONENT that has replaced div

function NavBar() {
  return (
    <>
      <div className={NavStyle.navBar}>
        <div>
          <h1 className={NavStyle.title}>NavBar</h1>
        </div>
        <div className={NavStyle.cart}>
          <img
            className={NavStyle.cartImg}
            src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png"
            alt="Cart"
          />
          <span className={NavStyle.cartSpan} color="yellow" show={true}>0</span>
        </div>
      </div>
    </>
  );
}
export default NavBar;
