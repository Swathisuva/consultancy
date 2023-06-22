import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { sliderData } from "./slider-data";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

// Slider.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// import './Slider.css';

// const Slider = () => {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideLength = slides.length;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
//   };

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('/images');
//         setSlides(response.data);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="slider">
//       <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
//       <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
//       {slides.map((slide, index) => (
//         <div
//           className={index === currentSlide ? 'slide current' : 'slide'}
//           key={slide.id}
//         >
//           {index === currentSlide && (
//             <div>
//               <img src={slide.path} alt={slide.filename} className="image" />
//               <h3>{slide.heading}</h3>
//               <p>{slide.desc}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Slider;
