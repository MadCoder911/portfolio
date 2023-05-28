import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { handleFormChange } from "../../Features/app/appSlice";
const FormRow = ({ title, id, type, value, handle }) => {
  return (
    <Wrapper>
      <label htmlFor="name">{title}:</label>

      {type === "text" ? (
        <input
          type="text"
          name={id}
          id={id}
          value={value}
          onChange={(e) => handle(e)}
          required
        />
      ) : (
        <textarea
          name={id}
          id=""
          cols="10"
          rows="7"
          value={value}
          required
          onChange={(e) => handle(e)}
        ></textarea>
      )}
    </Wrapper>
  );
};
export default FormRow;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  label {
    margin-bottom: 10px;
    font-size: 14px;
  }
  input {
    background-color: #001321;
    border: 2px solid var(--border);
    border-radius: 5px;
    padding: 8px 10px;

    color: var(--main-color-2);
    outline: #001321;
  }
  input:focus {
    border-color: 3px solid var(--main-color-2);
  }
  textarea {
    background-color: #001321;
    border: 2px solid var(--border);
    border-radius: 5px;
    padding: 8px 10px;
    color: var(--main-color-2);
    outline: #001321;
    resize: none;
  }
  textarea:focus {
    border-color: 3px solid var(--main-color-2);
  }
`;
