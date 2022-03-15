import React from 'react';

export default function Category({ imageLink, title, alt }) {
  return (
    <div className="category-wrapper m-4">
      <img
        src={imageLink}
        alt={alt}
        className="img-responsive category-image"
      />
      <p className="f-8 t-c-1 category-text center-text">{title}</p>
    </div>
  );
}
