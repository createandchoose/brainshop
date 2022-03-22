import React from 'react';

function Category(props) {
  const { imageLink, categoryName, altText } = props;
  return (
    <div className="category-wrapper m-4">
      <img
        src={imageLink}
        alt={altText}
        className="img-responsive category-image"
      />
      <p className="f-8 t-c-1 category-text center-text">{categoryName}</p>
    </div>
  );
}

export { Category };
