import React from 'react';
import '../styles/ImageCycler.css';

export const ImageCycler = () => {
  return (
    <div className="image-cycler-container">
      <img 
        src="./img/profile-1.jpg" 
        alt="Eddie Jesus Ezequiel Sanchez Guerrero - Slide 1" 
        className="image-cycler-slide"
      />
      <img 
        src="./img/profile-2.jpg" 
        alt="Eddie Jesus Ezequiel Sanchez Guerrero - Slide 2" 
        className="image-cycler-slide"
      />
      <img 
        src="./img/profile-3.jpg" 
        alt="Eddie Jesus Ezequiel Sanchez Guerrero - Slide 3" 
        className="image-cycler-slide"
      />
    </div>
  );
};

export default ImageCycler;
