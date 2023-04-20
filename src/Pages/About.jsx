import styled from "styled-components";
const About = () => {
  return (
    <Wrapper>
      <div className="side-menu">
        <div className="small-menu">small menu</div>
        <div className="main-menu">Main menu</div>
      </div>
      <div className="rest">x</div>
    </Wrapper>
  );
};
export default About;
const Wrapper = styled.main`
  display: flex;
  height: 100vh;
  .side-menu {
    display: flex;
    width: 270px;
    height: 100%;
    border-right: 0.2px solid var(--main-color-2);
    .small-menu {
      height: 100%;
      width: 30%;
      border-right: 0.2px solid var(--main-color-2);
    }
  }
`;
