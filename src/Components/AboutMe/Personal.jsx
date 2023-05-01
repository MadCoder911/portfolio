import styled from "styled-components";
import Side from "./Side";
import RightContent from "./RightContent";
import { updateData } from "../../Features/app/appSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { aboutPersonal } from "../../Utils/data";
import { updateActiveSubData } from "../../Features/app/appSlice";
const Personal = () => {
  const dispatch = useDispatch();
  const { activeAbouTab, data } = useSelector((store) => store.app);

  useEffect(() => {
    dispatch(updateData(aboutPersonal));
  }, []);

  return (
    <Wrapper>
      <Side />
      <RightContent />
    </Wrapper>
  );
};
export default Personal;
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;
