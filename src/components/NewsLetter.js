import React from 'react';
const NewsLetter = () => (
  <section className="py-5 bg-dark text-white">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            placeholder="enter name"
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            placeholder="enter email"
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary btn-lg btn-block">
            <i className="far fa-envelope-open mr-2" /> Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
);
export default NewsLetter;
