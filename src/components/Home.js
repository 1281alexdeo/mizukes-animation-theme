import React from 'react';
import bookPic from '../img/book.png';
import mountain from '../img/mountains.jpg';
import Slide from 'react-reveal/Slide';
//seting background image
const style = {
  backgroundImage: `url(${mountain})`,
  minHeight: '600px',
  position: 'relative'
};
const Home = () => (
  <div style={style} className="text-white" id="home">
    <div className="primary-overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center">
            <h1 className="display-2 mt-5 pt-5">Do what you dream of</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, odio.
            </p>
            <a href="" className="btn btn-outline-secondary btn-lg text-white">
              <i className="fa fa-arrow-right" /> Read More
            </a>
          </div>
          <div className="col-lg-6">
            <Slide right>
              <img
                src={bookPic}
                alt="book"
                className="img-fluid d-none d-lg-block"
              />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
