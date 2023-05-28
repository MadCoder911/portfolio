import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContactMe } from "../Components/ContactMe/ContactMe";
import { changePage } from "../Features/app/appSlice";
import styled from "styled-components";
const Contact = () => {
  const dispatch = useDispatch();
  const { activeAbouTab, activePage } = useSelector((store) => store.app);

  useEffect(() => {
    dispatch(changePage("contact"));
  }, []);
  return (
    <Wrapper>
      <ContactMe />
    </Wrapper>
  );
};
export default Contact;
const Wrapper = styled.main`
  @media (max-width: 1000px) {
  }
`;
