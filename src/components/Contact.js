import React from 'react';
import mlogo from '../img/mlogo.png';
import Rotate from 'react-reveal/Rotate';
const Contact = () => {
  return (
    <section id="contact" className="py-3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-9 ">
            <h3>Get In Touch</h3>
            <p className="lead mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              amet.
            </p>
            <form>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button className="btn btn-primary" type="button">
                      <i className="fa fa-users" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button className="btn btn-primary" type="button">
                      <i className="fa fa-envelope" />
                    </button>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-pencil-alt" />
                    </button>
                  </div>
                  <textarea
                    type="textarea"
                    className="form-control"
                    placeholder="Message"
                    row="15"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-block btn-primary"
              />
            </form>
          </div>
          <div className="col-md-3 align-self-center">
            <Rotate>
              <img src={mlogo} alt="logo" className="img-fluid" />
            </Rotate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
