import styled from "styled-components";
import FormRow from "./FormRow";
import { useSelector, useDispatch } from "react-redux";
import {
  handleFormChange,
  setFormResp,
  submitForm,
  clearForm,
  showFormResp,
} from "../../Features/app/appSlice";
import { TiTick } from "react-icons/ti";
const Form = () => {
  const { name, email, message, showResp, formResponse } = useSelector(
    (store) => store.app
  );
  const date = new Date();
  const finalDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  const dispatch = useDispatch();
  const handleInput = (e) => {
    dispatch(handleFormChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    const submission = {
      name: name,
      email: email,
      message: message,
      date: finalDate,
    };
    e.preventDefault();
    if (!name || !email || !message) {
      dispatch(setFormResp("Please fill all input fields !"));
      dispatch(showFormResp(true));
      setTimeout(() => {
        dispatch(setFormResp("submit-button"));
        dispatch(showFormResp(false));
      }, 3000);
    } else {
      dispatch(setFormResp(`Message Recieved !`));
      dispatch(showFormResp(true));
      submitForm(submission);
      dispatch(clearForm());
      setTimeout(() => {
        dispatch(setFormResp("submit-button"));
        dispatch(showFormResp(false));
      }, 6000);
    }
  };
  return (
    <Wrapper>
      <form>
        <FormRow
          title="_name"
          id="name"
          type="text"
          value={name}
          handle={handleInput}
        />
        <FormRow
          title="_email"
          id="email"
          type="text"
          value={email}
          handle={handleInput}
        />
        <FormRow
          title="_message"
          id="message"
          type="textArea"
          value={message}
          handle={handleInput}
        />
        <button onClick={(e) => handleSubmit(e)}>{formResponse}</button>
      </form>
      {/* <div className={`error ${showResp && "show"}`}>{formResponse}</div> */}
    </Wrapper>
  );
};
export default Form;
const Wrapper = styled.div`
  position: relative;
  width: 50%;
  border-right: 1px solid var(--border);
  height: calc(100vh - 181px);
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 55%;
    button {
      background-color: var(--button);
      color: white;
      font-size: 13px;
      padding: 10px 13px;
      border-radius: 6px;
      cursor: pointer;
      border: none;
      transition: all 0.1s ease-in-out;
    }
    button:hover {
      background-color: var(--button-hover);
    }
  }
  /* .error {
    position: absolute;
    bottom: 6px;
    border: 3px solid var(--border);
    border-radius: 5px;
    padding: 10px 20px;
    transform: translateY(100px);
    transition: transform 0.5s ease-in-out;
  } */
  .show {
    transform: translateY(0px);
  }
  @media (max-width: 1000px) {
    width: 100%;
    border-right: none;
    align-items: start;
    height: calc(100vh - 300px);
    margin-top: 30px;
    form {
      width: 80%;
    }
  }
`;
