import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../Features/app/appSlice";
const Landing = () => {
  const dispatch = useDispatch();
  const { activePage } = useSelector((store) => store.app);
  useEffect(() => {
    dispatch(changePage("landing"));
  }, []);
  return (
    <Wrapper>
      <div className="gap"></div>
      <div className="text">
        <div className="top">
          <p className="hello">Hello, I am</p>
          <h1>Ahmed Essam</h1>
          <h1 className="light">
            <span className="purple mob"> {">"} Front-end developer</span>
          </h1>
        </div>
        <div className="bottom">
          <p className="gray">// find my portfolio on Github.</p>

          <p>
            <span className="purple">const</span>{" "}
            <span className="green">github</span> ={" "}
            <span className="skin">"https://github.com/MadCoder911"</span>
          </p>
        </div>
      </div>
      <div className="images">
        <img src="https://i.imgur.com/Opb0jp0.png" alt="" />
      </div>
    </Wrapper>
  );
};
export default Landing;
const Wrapper = styled.main`
  display: flex;
  color: white;
  margin-top: 90px;
  height: 100%;
  width: 100%;
  .gap {
    width: 270px;
  }
  h1:first-of-type {
    font-weight: 300;
    font-size: 75px;
  }
  h1 {
    font-weight: 500;
  }

  h1 {
    padding: 0px;
    margin: 0px;
  }
  .bottom {
    margin-top: 70px;
  }
  .images img {
    position: absolute;
    left: 500px;
    top: 50px;
    z-index: 2;
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    margin-top: 0px;

    .gap {
      width: 20px;
    }
    .text {
      .hello {
        font-size: 22px;
        margin-top: 90px;
      }

      z-index: 100;
      h1:first-of-type {
        width: 80%;
        font-weight: 300;
        font-size: 80px;
      }
      h1 {
        font-size: 25px;
        font-weight: 200;
      }
      p {
        font-size: 15px;
      }
    }
    .images img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 600px;
      z-index: 1;
    }
    .text .mob {
      color: #43d9ad;
    }
    .bottom {
      margin-top: 120px;
    }
  }
`;
