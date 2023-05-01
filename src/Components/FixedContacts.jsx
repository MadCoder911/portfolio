import {
  AiOutlineCaretDown,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import styled from "styled-components";
const FixedContacts = () => {
  return (
    <Wrapper>
      <p className="title">
        <AiOutlineCaretDown />
        contacts
      </p>
      <div className="contacts">
        <p>
          {" "}
          <AiOutlineMail />
          ahmed.ae686@gmail.com
        </p>

        <p>
          {" "}
          <AiOutlinePhone />
          +20 1140808862
        </p>
      </div>
    </Wrapper>
  );
};

export default FixedContacts;

const Wrapper = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
