import styled from "styled-components";
import { AiOutlineRight, AiOutlineCaretDown } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";
import { IoIosFolder } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import FixedContacts from "../FixedContacts";
import { useEffect, useState } from "react";
import { updateActiveSubData } from "../../Features/app/appSlice";
const Side = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.app);

  const [active, setActive] = useState(data.menu[0]);

  const handleClick = (item) => {
    dispatch(updateActiveSubData(item));
    setActive(item);
  };
  useEffect(() => {
    setActive(data.menu[0]);
  }, [data]);
  return (
    <Wrapper>
      <p className="title">
        <AiOutlineCaretDown />
        {data.text}
      </p>
      <ul>
        {data.menu.map((item, id) => {
          const colors = data.colors;

          return (
            <li key={id} onClick={() => handleClick(item)}>
              <AiOutlineRight
                className={`${item === active && "rotate text-active"} `}
              />
              <IoIosFolder className={colors[id]} />
              <div className={`${item === active && "text-active"}`}>
                {item}
              </div>
            </li>
          );
        })}
      </ul>
      <FixedContacts />
    </Wrapper>
  );
};
export default Side;
const Wrapper = styled.section`
  width: 212.5px;

  border-right: 1px solid var(--border);
  .title {
    color: white;
    display: flex;
    align-items: center;
    font-weight: 100;
    font-size: 15px;
    border-bottom: 1px solid var(--border);
    margin: 0px;
    padding: 9px;
    svg {
      font-size: 15px;
      margin-right: 5px;
      font-weight: 600;
    }
  }
  .title:hover {
    cursor: pointer;
  }
  ul {
    padding-left: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
    li {
      display: flex;
      align-items: center;
      padding-top: 12px;

      svg {
        font-size: 14px;
        margin-right: 6px;
        transition: all 0.2s ease-in-out;
      }
    }
    li:hover {
      cursor: pointer;
      color: white;
    }
  }
  .contacts {
    padding: 5px;
    cursor: pointer;
    p {
      font-size: 13px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
        font-size: 17px;
      }
    }
    p:hover {
      color: white;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    .contacts {
      border-bottom: 1px solid var(--border);
    }
  }
`;
