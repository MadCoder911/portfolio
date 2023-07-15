import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
const LinesNumber = () => {
  const { lines } = useSelector((store) => store.app);
  let presentedLines = Array.from("x".repeat(lines));

  return (
    <Wrapper>
      {presentedLines.map((item, index) => {
        return <p key={index}>{index + 1} *</p>;
      })}
    </Wrapper>
  );
};
export default LinesNumber;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5%;
  padding: 20px 0px;
  line-height: 25px;
  p {
    display: flex;
    margin: 0px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
