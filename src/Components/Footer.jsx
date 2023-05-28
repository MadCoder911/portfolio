import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <Wrapper>
      <div className="left">
        <p>Find me in:</p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100009631850410"
              target="_blank"
            >
              <GrFacebookOption />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ahmed-essam-5668b519b/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <li className="right">
          <a href="https://github.com/MadCoder911" target="_blank">
            <p>@MadCoder911</p>
            <BsGithub />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};
export default Footer;
const Wrapper = styled.footer`
  background-color: var(--main-color-1);
  position: absolute;
  bottom: 0px;
  overflow: hidden;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
  z-index: 999;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left p {
    padding: 0px 20px;
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 15px;
    border-right: 1px solid var(--border);
  }
  .left ul {
    display: flex;
    li {
      height: 40px;
    }
  }
  a {
    padding: 0px 10px;
    color: var(--main-color-2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 20px;
    border-right: 1px solid var(--border);
  }
  a:hover {
    color: var(--main-color-2-shade);
    background-color: var(--hover-shade);
  }
  .right {
    display: flex;
    align-items: center;
    a {
      border: none;
      font-size: 23px;

      border-left: 1px solid var(--border);
    }
    p {
      font-size: 15px;
      padding-right: 10px;
    }
  }
  @media (max-width: 800px) {
    .right {
      display: none;
    }
    .left {
      ul li:last-child a {
        border: 0;
      }
      p {
        width: 90%;
      }
      width: 100%;
    }
  }
`;
