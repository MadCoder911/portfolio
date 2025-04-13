import tech from "../assets/tech.jpeg";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import boxFurnitre from "../assets/boxFurniture.png";
import travelagency from "../assets/travelagency.png";
import ai from "../assets/ai.png";
import dreaminn from "../assets/dreaminn.png";
import kasper from "../assets/kasper.png";
import elzero from "../assets/elzero.png";
import via from "../assets/via.png";
import movies from "../assets/movies.png";
import nextblog from "../assets/Portfolio.png";
import ludas from "../assets/ludas.png";
export const stacks = [
  {
    icon: <DiJavascript />,
    name: "Javascript",
  },
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <TbBrandNextjs />,
    name: "NextJs",
  },
];
export const projectss = [
  {
    name: "ludas_ice-cream",
    pic: ludas,
    brief:
      "Full stack ice-cream shop built using NextJs for frontend, Express and Mongo DB for backend.",
    tech: "nextjs",
    link: "https://ludas-icecream.vercel.app/",
  },
  {
    name: "dream inn",
    pic: dreaminn,
    brief:
      "Full stack hotel booking website built using NextJs for frontend, Express and Mongo DB for backend.",
    tech: "nextjs",
    link: "https://www.dreaminnegypt.com/",
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
  {
    name: "landing page",
    pic: elzero,
    brief: "Simple landing page built using html, css and js only.",
    tech: "javascript",
    link: "https://madcoder911.github.io/HTML_CSS_Template3/",
  },
  {
    name: "landing page 2",
    pic: kasper,
    brief: "Simple landing page built using html, css and js only.",
    tech: "javascript",
    link: "https://madcoder911.github.io/HTML_And_CSS_Temp_1/",
  },
  {
    name: "travel agency landing page",
    pic: travelagency,
    brief:
      "Simple demo landing page created for a travel agency using html,css and javascript",
    tech: "javascript",
    link: "https://madcoder911.github.io/Travel-agency-landing-page/",
  },
  {
    name: "AI business landing page",
    pic: ai,
    brief:
      "Landingpage created for AI Business using html,css and javascript, (desktop versio only, mobile version is not supported yet)",
    tech: "react",
    link: "https://invt-ai-landing.vercel.app/",
  },
];
