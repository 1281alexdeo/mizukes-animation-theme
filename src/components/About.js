import React from 'react';

const About = () => {
  return (
    <section className="py-5 text-center bg-light" id="about">
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="  mb-5">
              <h1 className="text-primary-color pb-3">Why this book?</h1>
              <p className="lead pb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                optio numquam dolorum doloribus eveniet impedit rerum nesciunt
                dolorem tempora.
              </p>
            </div>
            {/* ACCORDIAN */}
            <div role="tablist" id="accordian">
              <div className="card">
                <div className="card-header" id="heading 1">
                  <h5 className="mb-0">
                    <div
                      href="#collapse1"
                      data-toggle="collapse"
                      data-parent="#accordian"
                    >
                      <i className="fa fa-arrow-circle-down" /> Get Inspired
                    </div>
                  </h5>
                </div>
                <div className="collapse show " id="collapse1">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque dignissimos eos, debitis doloribus maiores vel
                    distinctio dolores! Consequuntur blanditiis delectus a,
                    ullam at, quos veritatis aliquid, atque in ex alias maxime
                    possimus fugiat? Eos inventore blanditiis, aliquid explicabo
                    error voluptatem, voluptatibus corrupti enim quibusdam ea
                    sint possimus eaque totam libero.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading 2">
                  <h5 className="mb-0">
                    <div
                      href="#collapse2"
                      data-parent="#accordian"
                      data-toggle="collapse"
                    >
                      <i className="fa fa-arrow-circle-down" /> Gain The
                      Knowledge
                    </div>
                  </h5>
                </div>
                <div className="collapse" id="collapse2">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor saepe rem doloremque, perferendis inventore ipsa vitae
                    veniam minus sunt consectetur tenetur dicta dignissimos?
                    Neque non odit tempora repudiandae perspiciatis ut iusto
                    nemo aspernatur dolore eveniet? Maxime cupiditate
                    accusantium, consequuntur cum maiores a voluptas veniam qui
                    ab possimus blanditiis rerum voluptates!
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading 3">
                  <h5 className="mb-0">
                    <div
                      href="#collapse3"
                      data-parent="#accordian"
                      data-toggle="collapse"
                    >
                      <i className="fa fa-arrow-circle-down" /> Open You Mind
                    </div>
                  </h5>
                </div>
                <div className="collapse" id="collapse3">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor saepe rem doloremque, perferendis inventore ipsa vitae
                    veniam minus sunt consectetur tenetur dicta dignissimos?
                    Neque non odit tempora repudiandae perspiciatis ut iusto
                    nemo aspernatur dolore eveniet? Maxime cupiditate
                    accusantium, consequuntur cum maiores a voluptas veniam qui
                    ab possimus blanditiis rerum voluptates!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
