import React from 'react';
import './ImageWithText.css';

const ImageWithText = ({image, title, text, imageDirection, backgroundColor}) => (
  <div className={`ImageWithText
      direction-${imageDirection}
      background-${backgroundColor}`}>
    <div className="TextSection">
      <h1 className="title">{title}</h1>
      <h2 className="text">{text}</h2>
    </div>
    <div className="ImageSection">
      <img src={image} alt={title}/>
    </div>
  </div>
);

export default ImageWithText;