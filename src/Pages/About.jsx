import styled from "styled-components";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Side from "../Components/AboutMe/Side";
import Personal from "../Components/AboutMe/Personal";
import { changeAboutTab } from "../Features/app/appSlice";
import Professional from "../Components/AboutMe/Professional";
import Hobbies from "../Components/AboutMe/Hobbies";
import { changePage } from "../Features/app/appSlice";
import { useEffect } from "react";
import { aboutPersonal, aboutHobbies, aboutProfessional } from "../Utils/data";
import { updateActiveSubData } from "../Features/app/appSlice";
const About = () => {
  const dispatch = useDispatch();
  const { activeAbouTab, data, activeSubData } = useSelector(
    (store) => store.app
  );

  useEffect(() => {
    dispatch(changePage("about"));
  }, []);
  return (
    <Wrapper>
      <div className="small-menu">
        <button
          type="button"
          onClick={() => {
            dispatch(updateActiveSubData("bio"));
            dispatch(changeAboutTab("personal"));
          }}
        >
          <BsFillFileEarmarkPersonFill
            className={activeAbouTab === "personal" ? "active" : ""}
          />
        </button>

        <button
          type="button"
          onClick={() => {
            dispatch(updateActiveSubData("experience"));
            dispatch(changeAboutTab("professional"));
          }}
        >
          <MdWorkOutline
            className={activeAbouTab === "professional" ? "active" : ""}
          />
        </button>

        <button
          type="button"
          onClick={() => {
            dispatch(updateActiveSubData("sports"));
            dispatch(changeAboutTab("hobbies"));
          }}
        >
          <CgGames className={activeAbouTab === "hobbies" ? "active" : ""} />
        </button>
      </div>

      {activeAbouTab === "personal" && <Personal />}
      {activeAbouTab === "professional" && <Professional />}
      {activeAbouTab === "hobbies" && <Hobbies />}
    </Wrapper>
  );
};
export default About;
const Wrapper = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  .small-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 60px;
    border-right: 0.2px solid var(--main-color-2);
    button {
      background-color: transparent;
      color: var(--main-color-2);
      border: none;
      font-size: 25px;
      padding: 14px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      a:hover {
        color: white;
        transition: all 0.3s ease-in-out;
      }
    }
    button:hover {
      color: white;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    .small-menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      border-bottom: 0.2px solid var(--main-color-2);
      button {
        background-color: transparent;
        color: var(--main-color-2);
        border: none;
        font-size: 25px;
        padding: 14px;
        cursor: pointer;

        a:hover {
          color: white;
        }
      }
      button:hover {
        color: white;
      }
    }
  }
  @media (max-width: 1000px) {
    overflow: scroll;
  }
`;
