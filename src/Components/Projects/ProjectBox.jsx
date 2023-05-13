import styled from "styled-components";
const ProjectBox = ({ pic, brief, tech, link }) => {
  return (
    <Wrapper>
      <img src={pic} alt="" />
      <div className="content">
        <p>Project Name</p>
        <p>{brief}</p>
        <a href={link} target="_blank">
          view-project
        </a>
      </div>
    </Wrapper>
  );
};
export default ProjectBox;
const Wrapper = styled.div`
  border: 1px solid var(--main-color-2);
  border-radius: 10px;
  background-color: #011221;
  overflow: hidden;
  max-width: 400px;
  img {
    max-width: 100%;
  }
  .content {
    border-top: 1px solid var(--main-color-2);
    padding: 5px 30px;
    margin-bottom: 20px;
    p {
      font-size: 14px;
      margin-bottom: 20px;
    }
    a {
      color: white;
      background-color: #1c2b3a;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 14px;
    }
    a:hover {
      background-color: #3d4d5d;
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;
