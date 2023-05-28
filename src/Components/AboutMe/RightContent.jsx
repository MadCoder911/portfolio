import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Info from "./Info";
import Snippets from ".././Snippets";
import { useSelector, useDispatch } from "react-redux";
import LinesNumber from "./LinesNumber";
const RightContent = () => {
  const { data } = useSelector((store) => store.app);
  return (
    <Wrapper>
      <div className="top-section">
        <p>
          {data.text} <AiOutlineClose />
        </p>
      </div>
      <div className="bottom-section ">
        <LinesNumber />
        <Info />
        <Snippets className="" />
      </div>
    </Wrapper>
  );
};
export default RightContent;
const Wrapper = styled.section`
  flex: 1;

  .top-section {
    border-bottom: 1px solid var(--border);
    p {
      position: relative;
      margin: 0;
      font-size: 15px;
      font-weight: 100;
      color: var(--main-color-2);
      padding: 9px;
      padding-right: 40px;
      display: inline-block;
      border-right: 1px solid var(--border);
    }
    svg {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .bottom-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 100%;
    overflow: scroll;
    .top-section {
      display: none;
    }
    .bottom-section {
      display: flex;
      /* overflow: scroll; */
      height: auto;
      flex-direction: column;
      width: 100%;
      p {
        width: 100%;
      }
    }
  }
`;
