import React from 'react';
import BoxItems from './BoxItems';
import { Fade, Zoom } from 'react-reveal';
export default class extends React.Component {
  state = {
    animate: false
  };
  render() {
    setTimeout(() => {
      this.setState({ animate: true });
    }, 1000);
    return (
      <section className="py-5 text-white" id="boxes">
        <div className="container">
          <div className="row  ">
            <div className="col-md-3">
              <Fade left>
                <BoxItems
                  bg="card text-center boxes"
                  h3="text-primary-color"
                  p="text-muted"
                />
              </Fade>
            </div>
            <div className="col-md-3">
              <Zoom when={this.state.animate}>
                <BoxItems bg="card text-center boxes primary-bg" />
              </Zoom>
            </div>

            <div className="col-md-3 ">
              <Zoom when={this.state.animate}>
                <BoxItems
                  bg="card text-center boxes"
                  h3="text-primary-color"
                  p="text-muted"
                />
              </Zoom>
            </div>
            <div className="col-md-3">
              <Fade right>
                <BoxItems bg="card text-center boxes primary-bg" />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
