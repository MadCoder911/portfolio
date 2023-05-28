import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styled from "styled-components";
export const ContactMe = () => {
  return (
    <Wrapper>
      <LeftSide />
      <RightSide />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  display: flex;
  position: relative;
`;
