import React from 'react';
import { useFilter } from 'context/filter-context';
import { useNavigate } from 'react-router-dom';

function Category(props) {
  let navigate = useNavigate();
  const { imageLink, categoryName, altText } = props;
  const { dispatch } = useFilter();

  const homePageDispatchHandler = () => {
    dispatch({ type: 'CATEGORY_FILTER', payload: categoryName });
    navigate('/listing');
  };

  return (
    <div className="category-wrapper m-4" onClick={homePageDispatchHandler}>
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
