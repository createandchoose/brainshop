import React from 'react';

export default function Navbar() {
  return (
    <header class="main-head ecom-navbar z-index-lg">
      <nav class="nav-component">
        <div class="logo-wrapper">
          <span class="hamburger-icon">
            <i class="fa fa-bars f-6 p-h-4"></i>
          </span>
          <a class="heading-4 t-c-1" href="index.html">
            Brain Store
          </a>
        </div>
        <div class="nav-searchBar-container ecom-searchbar">
          <span class="nav-searchIcon">
            <i class="fa fa-search f-5 t-c-3"></i>
          </span>
          <input
            type="text"
            class="p-v-3 nav-searchBar"
            placeholder="Search Items..."
          />
        </div>
        <div class="link-wrapper">
          <a
            href="login.html"
            class="t-c-2 f-5 p-v-3 p-h-8 m-h-3 sign-in-button"
          >
            Sign in
          </a>
          <div class="badge-wrapper p-h-4 m-h-3">
            <span class="badge-icon f-8 m-2">
              <a href="wishlist.html" class="t-c-1">
                <i class="fa fa-heart"></i>
              </a>
            </span>
            <div class="badge centered-row ecom-badge">3</div>
          </div>
          <span class="f-7 p-h-1 pointer badge-caption">Wishlist</span>
          <div class="badge-wrapper p-h-4 m-h-3">
            <span class="badge-icon f-8 m-2">
              <a href="cart.html" class="t-c-1">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </span>
            <div class="badge centered-row ecom-badge">3</div>
          </div>
          <span class="f-7 p-h-1 pointer badge-caption">Cart</span>
        </div>
      </nav>
    </header>
  );
}
