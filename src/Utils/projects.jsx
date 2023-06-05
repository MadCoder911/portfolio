import tech from "../assets/tech.jpeg";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import boxFurnitre from "../assets/boxFurniture.png";
import jobster from "../assets/jobster.png";
import via from "../assets/via.png";
import movies from "../assets/movies.png";
export const stacks = [
  {
    icon: <DiJavascript />,
    name: "Javascript",
  },
  {
    icon: <FaReact />,
    name: "React",
  },
];
export const projectss = [
  {
    name: "box_furniture",
    pic: boxFurnitre,
    brief:
      "Box furniture is an online sotre built with React , Redux toolkit & stripe",
    tech: "react",
    link: "https://box-furniture.vercel.app/",
  },
  {
    name: "jobster",
    pic: jobster,
    brief:
      "jobster is a web app for tracking and posting jobs built with React & Redux toolkit",
    tech: "react",
    link: "https://react-job-app.vercel.app/",
  },
  {
    name: "watchflix",
    pic: movies,
    brief:
      "Watchflix is a movies app where you can check the latest movies build with vanilla js",
    tech: "javascript",
    link: "https://madcoder911.github.io/Movie-App-Advanced/",
  },
  {
    name: "via_club",
    pic: via,
    brief:
      "Landing page built for via club built with React, redux toolkit and framer-motion",
    tech: "react",
    link: "https://via-club-main-test.vercel.app/",
  },
];
