import React, { useContext } from "react";
import "./Team.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import JeevanKC from "../../img/jeevanKC.png";
import BishalDahal from "../../img/bishalDahal.png";
import AshokSubedi from "../../img/ashokSubedi.png";
import BiwashBudhathoki from "../../img/biwashBudhathoki.png";
import BishalRegmi from "../../img/bishalRegmi.png";


import { themeContext } from "../../Context";
const Team = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="team" id="team">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Introducing</span>
      <span>Our Team</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="team-slider"
      >
        <SwiperSlide>
          <img src={JeevanKC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BishalDahal} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BiwashBudhathoki} alt="" />
        </SwiperSlide>
        
        
      </Swiper>

      <Swiper
      spaceBetween={350}
      slidesPerView={3}
      grabCursor={true}
      className="team-sliders"
      
      >
      <SwiperSlide>
          <img src={AshokSubedi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BishalRegmi} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Team;
