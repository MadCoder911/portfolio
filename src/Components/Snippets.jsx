import styled from "styled-components";
import { Snippet } from "./AboutMe/Snippet";
const Snippets = () => {
  return (
    <Wrapper>
      <div className="title">// Code snippet showcase:</div>
      <Snippet />
      <Snippet />
    </Wrapper>
  );
};
export default Snippets;
const Wrapper = styled.section`
  overflow-x: scroll;
  @media (min-width: 1001px) {
    height: calc(100vh - 188px);
  }
  overflow: scroll;
  .title {
    font-size: 14px;
  }
  overflow: scroll;
  margin: 0px;
  width: 50%;
  padding: 20px 20px;

  @media (max-width: 1000px) {
    width: 100%;
    height: fit-content;
    overflow: scroll;
    padding-bottom: 150px;

    /* margin-bottom: 300px; */
  }
`;
