import React, { useContext } from "react";
import "./Works.css";
import Aces from "../../img/aces.ico";
import Bit from "../../img/bit.ico";
import Tu from "../../img/tu.ico";
import Innovators from "../../img/innovators.ico";
import Wfn from "../../img/wfn.ico";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
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
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Organizations</span>
          <spane>
            <h1>Different ways we can work together.</h1>
            <br />
            <h2>Research And Proof Of Concept</h2>
            We can plan, design, develop, test and conduct a workflow audit for your next great blockchain idea.
            <br />
            <h2>End-To-End Solution</h2>
            We can design and implement your entire IT project including blockchain infrastructure.
            <br />
            <h2>Instant Blockchain Team</h2>
            We can assist your IT & Engineering team to implement and deploy blockchain solutions.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact Us</button>
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
            <img src={Aces} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Bit} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tu} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Wfn} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Innovators} alt="" />
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
