import styled from "styled-components";
import { Space } from "./Space";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { setCodeLines } from "../../Features/app/appSlice";
const Code = () => {
  const { name, message, email } = useSelector((store) => store.app);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();
  const ref = useRef(null);
  let date = new Date();
  const displayDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    let TotalLines = Math.floor(height / 25);
    dispatch(setCodeLines(TotalLines));
  });
  return (
    <Wrapper ref={ref}>
      <p>
        <span className="green">const</span>{" "}
        <span className="purple">message = </span> <span>{"{"}</span> <br />
        <Space />
        <Space />
        <span className="purple">name</span> :{" "}
        <span className="skin">"{name}"</span> ,
        <br />
        <Space />
        <Space />
        <span className="purple">email</span> :
        <span className="skin">"{email}"</span> ,
        <br />
        <Space />
        <Space />
        <span className="purple">message</span> :
        <span className="skin">"{message}"</span> ,
        <br />
        <Space />
        <Space />
        <span className="purple">date</span> :{" "}
        <span className="skin">"{displayDate}"</span> ,
        <br />
        <span>{"}"}</span>
        <br />
      </p>{" "}
      <p>
        <span className="green">{"<button"}</span>
        <Space></Space> <span className="purple">{"onClick"}</span>
        <span className="red">{"{"}</span>
        <br /> <Space />
        <Space /> {"()   "} <span className="skin">{"=>"}</span>{" "}
        <span className="green">{"{"}</span> <br />
        <Space /> <Space /> <Space /> <Space />{" "}
        <span className="purple">{"handleSubmit("}</span>
        <span className="red">{"message"}</span>
        <span className="purple">{")"}</span> <br />
        <Space />
        <Space />
        <Space />
        <Space />
        <span className="green">{"}"}</span> <br />
        <span className="red">{"}"}</span>
        <span className="green">{">"}</span>submit-message
        <span className="green">{"</button>"}</span>
      </p>
    </Wrapper>
  );
};
export default Code;
const Wrapper = styled.div`
  p {
    margin: 0px;
    padding: 0px;
    line-height: 25px;
    top: 0;
    max-width: 400px;
    overflow: hidden;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
