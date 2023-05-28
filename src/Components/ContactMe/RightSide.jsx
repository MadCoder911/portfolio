import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Form from "./Form";
import Message from "./Message";
const RightSide = () => {
  return (
    <Wrapper>
      <div className="top">
        <p>
          contacts <AiOutlineClose />
        </p>
      </div>
      <div className="bottom">
        <Form />
        <Message />
      </div>
    </Wrapper>
  );
};
export default RightSide;
const Wrapper = styled.section`
  width: calc(100% - 270px);
  .top {
    border-bottom: 1px solid var(--border);
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;

    p {
      padding: 0px;
      margin: 0px;
      margin-left: 13px;
      border-right: 1px solid var(--border);
      height: 100%;
      display: flex;
      align-items: center;
      svg {
        margin-left: 30px;
        margin-right: 20px;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: fit-content;
    .top {
      display: none;
    }
  }
  .bottom {
    display: flex;
    width: 100%;
    position: relative;
  }
`;
