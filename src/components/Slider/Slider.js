import React from "react";

export default function Sliders() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-dark slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ height: "460px" }}>
          <img
            src="https://mymodernmet.com/wp/wp-content/uploads/2018/10/best-craft-blogs-thumbnail.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" style={{ height: "460px" }}>
          <img
            src="https://passion.jwsuperthemes.com/wp-content/uploads/2016/08/slider-1passion.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" style={{ height: "460px" }}>
          <img
            src="https://passion.jwsuperthemes.com/wp-content/uploads/2016/07/slider2passion.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
