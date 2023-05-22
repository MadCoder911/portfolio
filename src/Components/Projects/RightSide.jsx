import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import Projects from "../../Pages/Projects";
import { useState } from "react";
import ProjectBox from "./ProjectBox";
import { useEffect } from "react";
const RightSide = () => {
  const { activeProject, allProjects } = useSelector((store) => store.app);
  const [activeProjects, setActiveProjects] = useState([...allProjects]);
  useEffect(() => {
    if (activeProject === "all") {
      setActiveProjects([...allProjects]);
    } else {
      let current = allProjects.filter((project) => {
        return project.tech === activeProject;
      });
      setActiveProjects([...current]);
      console.log(activeProjects);
    }
  }, [activeProject]);
  return (
    <Wrapper>
      <div className="top">
        <p>
          {activeProject}; <AiOutlineClose />
        </p>
      </div>
      <div className="bottom">
        {activeProjects.map((project) => {
          return <ProjectBox {...project} />;
        })}
      </div>
    </Wrapper>
  );
};
export default RightSide;
const Wrapper = styled.div`
  width: calc(100% - 270px);

  .top {
    border-bottom: 0.1px solid var(--main-color-2);
    min-height: 35px;
    display: flex;
    align-items: center;
    p {
      margin: 0px;

      height: 35px;
      display: flex;
      align-items: center;
      padding-left: 25px;
      border-right: 0.1px solid var(--main-color-2);
      svg {
        margin-left: 25px;
        margin-right: 10px;
        font-size: 14px;
      }
    }
  }
  .bottom {
    padding: 60px 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 40px;
    position: relative;

    overflow: scroll;
  }
  @media (min-width: 1001px) {
    height: 80vh;
    position: relative;
    overflow: scroll;
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    .top {
      display: none;
    }
    .bottom {
      flex-shrink: 0;
      gap: 10px;
      margin: auto;
      padding: 20px 40px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;
