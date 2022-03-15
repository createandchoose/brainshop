import React from 'react';
import YourSvg from '../assets/hero.svg';
import Category from '../components/Category';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero">
        <img class="hero-img" src={YourSvg} />

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
          <Category
            imageLink="https://ih1.redbubble.net/image.493083052.7417/sn,x1000-pad,1000x1000,f8f8f8.u1.jpg"
            alt="books"
            title="Books"
          />

          <Category
            imageLink="https://ih1.redbubble.net/image.440168075.0092/ssrco,mhoodie,mens,fafafa:ca443f4786,front,square_product,x600-bg,f8f8f8.1u4.jpg"
            alt="hoodies"
            title="Hoodies"
          />

          <Category
            imageLink="https://ih1.redbubble.net/image.520904037.1781/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
            alt="Stickers"
            title="Stickers"
          />

          <Category
            imageLink="https://ih1.redbubble.net/image.892503035.9604/st,small,507x507-pad,600x600,f8f8f8.jpg"
            alt="Art"
            title="Art"
          />

          <Category
            imageLink="https://ih1.redbubble.net/image.1341023847.2843/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.u2.jpg"
            alt="T-shirt"
            title="T-shirt"
          />
        </main>
      </section>
    </>
  );
}

export default Home;
