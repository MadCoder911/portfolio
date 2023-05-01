import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../Features/app/appSlice";
const Contact = () => {
  const dispatch = useDispatch();
  const { activeAbouTab, activePage } = useSelector((store) => store.app);

  useEffect(() => {
    dispatch(changePage("contact"));
  }, []);
  return <div>Contact</div>;
};
export default Contact;
