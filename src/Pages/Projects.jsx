import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../Features/app/appSlice";
import { useEffect } from "react";
const Projects = () => {
  const dispatch = useDispatch();
  const { activeAbouTab, activePage } = useSelector((store) => store.app);

  useEffect(() => {
    dispatch(changePage("projects"));
  }, []);
  return <div>Projects</div>;
};
export default Projects;
