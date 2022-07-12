import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { Pagination } from "swiper";
import "swiper/css/pagination";
import NikhilGoyal from "../../img/nikhilGoyal.jpg";
import PranavAgrawal from "../../img/pranavAgrawal.jpg";
import ProloyMitra from "../../img/proloyMitra.jpg";
import BibekKoirala from "../../img/bibekKoirala.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: NikhilGoyal,
      review:
        "..",
    },
    {
      img: PranavAgrawal ,
      review:
        "..",
    },
    {
      img: ProloyMitra,
      review:
        "..",
    },
    {
      img: BibekKoirala,
      review:
        "..",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Our Experts </span>
        <span>Words </span>
        <span>To Us</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
