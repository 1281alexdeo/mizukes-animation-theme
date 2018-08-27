import React, { Component } from 'react';
import AuthorsCard from './AuthorsCard';
import img1 from '../img/person1.jpg';
import img2 from '../img/person2.jpg';
import img3 from '../img/person3.jpg';
import img4 from '../img/person4.jpg';
import Zoom from 'react-reveal/Zoom';
class Authors extends Component {
  render() {
    return (
      <section className="py-5 text-center container" id="authors">
        <div className="row">
          <div className="col">
            <div className="info-header mb-5">
              <h1 className="text-primary-color pb-3 ">Authors</h1>
              <p className="pb-3 lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. harum,
                incidunt totam, esse harum, incidunt nobis architecto totam,
                esse harum,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <Zoom>
              <AuthorsCard
                img={img1}
                name="Sarah Tancredi"
                position="Developer"
                description={
                  'loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum'
                }
              />
            </Zoom>
          </div>
          <div className="col-lg-3 col-md-6">
            <Zoom>
              <AuthorsCard
                img={img2}
                name="James Williams"
                position="Manager"
                description={
                  'loremipsuml oremipsu  sumloremipsu mloremip umloremipsuml oremipsum'
                }
              />
            </Zoom>
          </div>
          <div className="col-lg-3 col-md-6">
            <Zoom>
              <AuthorsCard
                img={img3}
                name="Kubo Teddy"
                position="Developer"
                description={
                  'loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum'
                }
              />
            </Zoom>
          </div>{' '}
          <div className="col-lg-3 col-md-6">
            <Zoom>
              <AuthorsCard
                img={img4}
                name="Lincon Borrows"
                position="Network Manager"
                description={
                  'loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum'
                }
              />
            </Zoom>
          </div>
        </div>
      </section>
    );
  }
}
export default Authors;
