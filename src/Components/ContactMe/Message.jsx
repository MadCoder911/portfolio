import styled from "styled-components";
import Code from "./Code";
import Lines from "./Lines";
const Message = () => {
  return (
    <Wrapper>
      <Lines />
      <Code />
    </Wrapper>
  );
};
export default Message;
const Wrapper = styled.section`
  padding: 100px;
  padding-top: 0px;
  display: flex;
  overflow: hidden;
  max-width: 650px;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
    width: 0px;
  }
`;
