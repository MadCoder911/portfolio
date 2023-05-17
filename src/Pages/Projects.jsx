import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../Features/app/appSlice";
import { useEffect } from "react";
import { LeftBar } from "../Components/Projects/LeftBar";
import RightSide from "../Components/Projects/RightSide";
import styled from "styled-components";
const Projects = () => {
  const dispatch = useDispatch();
  const { activeAbouTab, activePage } = useSelector((store) => store.app);

  useEffect(() => {
    dispatch(changePage("projects"));
  }, []);
  return (
    <Wrapper>
      <LeftBar />
      <RightSide />
    </Wrapper>
  );
};
export default Projects;
const Wrapper = styled.main`
  display: flex;

  @media (max-width: 1000px) {
    display: block;
    height: fit-content;
    overflow: scroll;
    height: calc(100vh - 200px);
  }
`;
