import styled from "styled-components";
import { AiOutlineRight, AiOutlineCaretDown } from "react-icons/ai";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { stacks } from "../../Utils/projects";
export const LeftBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Wrapper>
      <div className="top">
        <button
          onClick={() => handleClick()}
          className={`${!showMenu && "icon-hidden"}`}
        >
          {" "}
          <AiOutlineCaretDown />
        </button>{" "}
        <p onClick={() => handleClick()}>Projects</p>
      </div>
      <div className={`selectors ${!showMenu && "hidden"}`}>
        {stacks.map((stack, i) => {
          const { icon, name } = stack;

          return <CheckBox icon={icon} name={name} key={i} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 270px;
  height: 100vh;
  border-right: 1px solid var(--border);
  .selectors {
    width: 100%;
  }
  .top {
    min-height: 35px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border);
    color: white;
    font-size: 14px;
    button {
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      padding: 0px;
      margin-left: 15px;
      transition: all 0.2s ease-in-out;
    }
    svg {
      cursor: pointer;
    }
    p {
      padding-left: 10px;
      margin: 0px;
    }
  }
  .selectors {
    max-height: 300px;
    transition: 0.1s all linear;
  }
  .hidden {
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
    .selectors {
      border-bottom: 1px solid var(--border);
    }
  }
  .selectors {
    padding-bottom: 10px;
  }
  .hidden {
    border: none;
  }
`;
