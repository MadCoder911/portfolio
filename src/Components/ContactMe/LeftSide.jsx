import styled from "styled-components";
import { useState } from "react";
import {
  AiFillCaretDown,
  AiOutlineCaretDown,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { RiShareBoxFill } from "react-icons/ri";
const LeftSide = () => {
  const [contacts, setContacts] = useState(true);
  const [findme, setFindme] = useState(true);
  return (
    <Wrapper>
      <div className="top">
        <button onClick={() => setContacts(!contacts)}>
          <AiFillCaretDown className={`${!contacts && "icon-hidden"}`} />{" "}
          contacts
        </button>
      </div>
      <div className={`contacts ${!contacts && "hide"}`}>
        <p>
          <AiOutlinePhone /> +011-4080-8862
        </p>
        <p>
          {" "}
          <AiOutlineMail /> ahmed.ae686@gmail.com
        </p>
      </div>
      <div className="top b-top">
        <button onClick={() => setFindme(!findme)}>
          <AiFillCaretDown className={`${!findme && "icon-hidden"}`} />{" "}
          find-me-also-in
        </button>
      </div>
      <div className={`find-me ${!findme && "hide"}`}>
        <p>
          <a href="">
            <RiShareBoxFill /> Facebook
          </a>
        </p>
        <p>
          {" "}
          <a href="">
            {" "}
            <RiShareBoxFill /> LinkedIn
          </a>
        </p>
      </div>
    </Wrapper>
  );
};
export default LeftSide;
const Wrapper = styled.section`
  width: 270px;
  border-right: 1px solid var(--border);
  height: 100vh;
  .b-top {
    border-top: 1px solid var(--border);
  }
  .top {
    padding: 8px 10px;

    border-bottom: 1px solid var(--border);
    height: 35px;
    button {
      svg {
        margin-right: 8px;
        margin-left: 9px;
        font-size: 14px;
        transition: 0.3s all ease-in-out;
      }
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: white;
      display: flex;
      align-items: center;
      padding: 0px;
      margin: 0px;
      font-size: 15px;
    }
  }
  svg {
    font-size: 20px;
    margin-right: 10px;
  }
  p {
    display: flex;
    align-items: center;

    padding: 0px 19px;
    font-size: 15px;
    cursor: pointer;
    a {
      display: flex;
      align-items: center;
      color: var(--main-color-2);
    }
  }
  .contacts,
  .find-me {
    transition: all 0.3s ease-in-out;
  }
  .hide {
    max-height: 0px;
    overflow: hidden;
    border: none;
  }
  .icon-hidden {
    transform: rotate(-90deg);
  }
  @media (max-width: 1000px) {
    height: fit-content;
    width: 100%;
  }
`;
