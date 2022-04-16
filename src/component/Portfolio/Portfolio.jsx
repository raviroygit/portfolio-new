import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Bootstrap4 from "../../img/bootstrap4.png";
import Codelength from "../../img/codelength.png";
import PortfolioRoy from "../../img/portfolio.png";
import SocialApp from "../../img/SocialApp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span 
      style={{color: darkMode?'white': ''}}
      >Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
            <a href="https://www.codelength.net/" target="_blank" rel='noreferrer'> <img src={PortfolioRoy} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://codelength.net/" target="_blank" rel='noreferrer'><img src={Codelength} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://roy-social-app.herokuapp.com/" target="_blank" rel='noreferrer'><img src={SocialApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href=" https://bootstrap4.codelength.net" target="_blank" rel='noreferrer'><img src={Bootstrap4} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;