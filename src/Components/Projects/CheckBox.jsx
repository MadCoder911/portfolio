import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { handleActiveProject } from "../../Features/app/appSlice";
import { useDispatch, useSelector } from "react-redux";
const CheckBox = ({ icon, name }) => {
  const { activeProject } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const handleCheckbox = (e) => {
    if (e.target.value === activeProject) {
      dispatch(handleActiveProject("all"));
      return;
    }
    dispatch(handleActiveProject(e.target.value));
  };
  return (
    <Wrapper>
      <input
        type="checkbox"
        name="react"
        id="react"
        value={name.toLowerCase()}
        onChange={(e) => handleCheckbox(e)}
        checked={name.toLowerCase() === activeProject ? true : false}
      />
      {icon} <p>{name}</p>
    </Wrapper>
  );
};
export default CheckBox;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  max-height: 30px;
  margin-top: 10px;

  input[type="checkbox"] {
    cursor: pointer;
    margin-right: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    font: inherit;
    color: currentColor;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    border: 2px solid var(--main-color-2);
    width: 15px;
    height: 15px;
    border-radius: 3px;
  }
  input[type="checkbox"]:hover {
    scale: 1.2;
  }
  input[type="checkbox"]::before {
    content: "";
    width: 15px;
    height: 15px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 2em 2em var(--main-color-2);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(0.5);
  }
  svg {
    font-size: 22px;
  }
  p {
    margin-left: 8px;
  }
`;
