import Side from "./Side";
import styled from "styled-components";
import RightContent from "./RightContent";
import { updateData } from "../../Features/app/appSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { aboutProfessional } from "../../Utils/data";
const Professional = () => {
  const dispatch = useDispatch();
  const { activeAbouTab, data } = useSelector((store) => store.app);

  useEffect(() => {
    dispatch(updateData(aboutProfessional));
  }, []);
  return (
    <Wrapper>
      <Side />
      <RightContent />
    </Wrapper>
  );
};
export default Professional;
const Wrapper = styled.section`
  display: flex;

  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;
