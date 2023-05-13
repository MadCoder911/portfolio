import styled from "styled-components";
import { AiOutlineRight, AiOutlineCaretDown } from "react-icons/ai";
import CheckBox from "./CheckBox";
import { stacks } from "../../Utils/projects";
export const LeftBar = () => {
  return (
    <Wrapper>
      <div className="top">
        <AiOutlineCaretDown /> <p>Projects</p>
      </div>
      <div className="selectors">
        {stacks.map((stack) => {
          const { icon, name } = stack;

          return <CheckBox icon={icon} name={name} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 270px;
  height: 100vh;
  border-right: 0.1px solid var(--main-color-2);
  .selectors {
    width: 100%;
  }
  .top {
    min-height: 35px;
    display: flex;
    align-items: center;
    border-bottom: 0.1px solid var(--main-color-2);
    color: white;
    font-size: 14px;
    svg {
      margin-left: 15px;
    }
    p {
      padding-left: 10px;
      margin: 0px;
    }
  }
  @media (max-width: 1000px) {
    height: fit-content;
    width: 100%;
    border-bottom: 1px solid var(--main-color-2);
  }
  .selectors {
    padding-bottom: 10px;
  }
`;
