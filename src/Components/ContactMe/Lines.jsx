import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
const Lines = () => {
  const { codeLines } = useSelector((store) => store.app);

  const lines = Array.from("x".repeat(codeLines));
  return (
    <Wrapper>
      {lines.map((line, i) => {
        let num = i + 1;
        return <div key={i}>{num}</div>;
      })}
    </Wrapper>
  );
};
export default Lines;
const Wrapper = styled.div`
  width: 20px;
  margin-right: 10px;
  div {
    line-height: 25px;
  }
`;
