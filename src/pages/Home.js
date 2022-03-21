import React from 'react';
import YourSvg from 'assets/hero.svg';
import Category from 'components/Category';
import { Link } from 'react-router-dom';
import { useProduct } from 'context/products-context';

function Home() {
  const { categories } = useProduct();
  return (
    <>
      <section className="hero">
        <img className="hero-img" src={YourSvg} />

        <h1 className="heading-3 center-text">
          Best place to get
          <span className="t-c-3 f-bold"> &nbsp;Brain</span> related stuff.
        </h1>
      </section>

      <section className="categories">
        <header className="categories-head z-index-lg">
          <h3 className="heading-2 t-c-3 f-bold p-h-4">Categories</h3>
          <Link to="/listing" className="heading-3 t-c-2 f-bold p-h-4 see-all">
            See All
            <span>
              <i className="fa fa-arrow-right p-h-3"></i>
            </span>
          </Link>
        </header>
        <main className="category-container">
          {categories.map(item => (
            <Category key={item.id} {...item} />
          ))}
        </main>
      </section>
    </>
  );
}

export default Home;
