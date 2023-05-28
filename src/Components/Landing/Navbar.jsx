import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../Features/app/appSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { activePage } = useSelector((store) => store.app);
  const checkActive = (tab) => {
    if (tab === activePage) {
      return "active-tab";
    } else return;
  };
  return (
    <div className="nav-line">
      <Wrapper className="">
        <div className="left">
          <ul>
            <li className="name">
              <Link to="/" onClick={() => dispatch(changePage("landing"))}>
                ahmed-essam
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => dispatch(changePage("landing"))}
                className={checkActive("landing")}
              >
                _hello
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => dispatch(changePage("about"))}
                className={checkActive("about")}
              >
                _about-me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => dispatch(changePage("projects"))}
                className={checkActive("projects")}
              >
                _projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <Link
            to="/contact"
            onClick={() => dispatch(changePage("contact"))}
            className={checkActive("contact")}
          >
            _contact-me
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
export default Navbar;
const Wrapper = styled.main`
  z-index: 20;
  height: 45px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  z-index: 100000;
  a {
    color: var(--main-color-2);
  }
  a:hover {
    color: white;
    background-color: var(--hover-shade);
  }
  .left ul {
    display: flex;
    justify-content: space-between;
    .name {
      width: 270px;
      a {
        padding-left: 25px;
        padding-right: 25px;
      }
    }
    li {
      height: 45px;
      a {
        padding-left: 20px;
        height: 100%;
        display: flex;
        align-items: center;
        border-right: 1px solid var(--border);
        padding-right: 20px;
        font-size: 15px;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    height: 100%;
    a {
      padding-right: 20px;
      display: flex;
      align-items: center;
      height: 100%;
      border-left: 1px solid var(--border);
      padding: 0px 20px;
      font-size: 15px;
    }
  }
  .active-tab {
    border-bottom: 2px solid rgb(204, 145, 35);
    color: white;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
