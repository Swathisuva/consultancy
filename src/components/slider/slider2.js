import React, { useState } from 'react';
import Store from '../store';
import Slider from './Slider';

const Slider2 = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  const updateCarouselImages = (newImages) => {
    setCarouselImages(newImages);
  };

  return (
    <div>
      <Slider carouselImages={carouselImages} />
      <Store updateCarouselImages={updateCarouselImages} />
    </div>
  );
};

export default Slider2;
