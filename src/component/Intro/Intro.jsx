import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span
            style={{ color: darkMode ? "white" : "" }}
          >Hy! I Am</span>
          <span>Ravi Kumar</span>
          <span>
            I have proven working experience as software developer with good logical and analytical skills. I have delivered number of complex and real time processing projects that solves customer's business problems. I can build everything from the front-end to the back-end and everything in between. Main areas of expertise are: - Frontend - JavaScript, Typescript, AJAX, HTML5/CSS3, pixel perfect and responsive layout - Frontend libraries/frameworks: jQuery, AngularJS 1/2, React, React Native, RequireJS, Bootstrap 3 - Backend - PHP, Parse Server, NodeJS (MEAN stack) - Hybrid Applications : Ionic/Angular, Ionic/React, Capacitor, Cordova, Flutter - Databases - MongoDB, MySQL - Cloud services - AWS, - Payment Integrations : In App Purchase, Stripe, PayPal - Tools - Git, GitHub, bug trackers, Jira I am a self motivated guy with extra ordinary analytical, problem solving skills. When you will work with me you will found a great co-operation from me. I am very flexible to customer budget and always tries to meet their expectations.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/raviroygit" target="_blank" rel='noreferrer'><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/erraviroy/" target="_blank" rel='noreferrer'> <img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/raviroy_intoxicating_sugar/" target="_blank" rel='noreferrer'><img src={Instagram} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="MERN" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ top: "50%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="MEAN" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Android & iOS" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;