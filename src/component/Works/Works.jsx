import React, { useContext } from "react";
import "./Works.css";
import Ezycerts from '../../img/Ezycerts.png'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Upwork from '../../img/Upwork.png'
import Dipole from '../../img/dipole.png'
import Freelancer from '../../img/freelance.png'

import {Link} from 'react-scroll'

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span
           style={{ color: darkMode ? "white" : "" }}
           >
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            Website development using ReactJs,
            <br />
           API development using NodeJs, ExpressJs, etc...
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <a href="https://dipoletechi.com/" target='_blank' rel='noreferrer'><img style={{width:"5rem"}} src={Dipole} alt="Dipole tech" /></a>
          </div>
          <div className="w-secCircle" style={{color:"black"}}>
            {/* <img src={Upwork} alt="" /> */}
            <a href="https://www.codelength.net/" target='_blank' rel='noreferrer' style={{color:"black",textDecoration: 'none'}}>
            Codelength.net
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.ezycerts.com/" target='_blank' rel='noreferrer'><img style={{width:"5rem"}} src={Ezycerts} alt="Ezycerts" /></a>
          </div>
          <div className="w-secCircle">
            <img src={Freelancer} style={{width:"100px",height:"50px"}} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;