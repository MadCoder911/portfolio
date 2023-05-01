import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { openNavbar, closeNavbar } from "../../Features/app/appSlice";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { stripBasename } from "@remix-run/router";
const MobileNav = () => {
  const dispatch = useDispatch();
  const { isNavbarOpen } = useSelector((store) => store.app);
  return (
    <>
      <Wrapper className="container">
        <p>ahmed-essam</p>
        {!isNavbarOpen && (
          <button onClick={() => dispatch(openNavbar())}>
            <AiOutlineMenu />
          </button>
        )}
        {isNavbarOpen && (
          <button onClick={() => dispatch(closeNavbar())}>
            <AiOutlineClose />
          </button>
        )}
      </Wrapper>
      {isNavbarOpen && (
        <Wrapper2>
          <ul>
            <li>
              <Link to="/">_hello</Link>
            </li>
            <li>
              <Link to="/about">_about-me</Link>
            </li>
            <li>
              <Link to="/projects">_projects</Link>
            </li>
            <li>
              <Link to="/contact">_contact-me</Link>
            </li>
          </ul>
          <Footer />
        </Wrapper2>
      )}
    </>
  );
};
export default MobileNav;
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  button {
    background-color: transparent;
    outline: none;
    border: none;
    color: var(--main-color-2);
    font-size: 30px;
    cursor: pointer;
    z-index: 100;
    padding: 0px;
    height: 30px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
const Wrapper2 = styled.nav`
  position: absolute;
  top: 64px;
  width: 100%;
  height: 100%;
  /* height: calc(100vh - 240px); */
  z-index: 200;

  background-color: var(--main-color-1);
  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    li {
      height: 60px;
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: 20px;
      border-bottom: 0.2px solid var(--main-color-2);
    }
  }
  a {
    color: var(--main-color-2);
    width: 100%;
  }
`;
