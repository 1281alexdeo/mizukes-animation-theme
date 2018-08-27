import React from 'react';
import Roll from 'react-reveal/';
class AuthorsCard extends React.Component {
  state = {
    animate: false
  };
  render() {
    setTimeout(() => {
      this.setState({
        animate: true
      });
    }, 1000);
    const { img, name, position, description } = this.props;
    return (
      <div className="card authorCard">
        <div className="card-body py-3">
          <img
            src={img}
            class="img-fluid rounded-circle pb-3 w-50"
            alt="avatar"
          />
          <h3>{name}</h3>
          <h5 className="text-muted">{position}</h5>
          <p>{description}</p>
          <Roll right cascade when={this.state.animate}>
            <div className="d-flex flex-row justify-content-center text-primary-color">
              <div className="p-4">
                <a href="#">
                  <i className="fab fa-facebook" />
                </a>
              </div>
              <div className="p-4">
                <a href="#">
                  <i className="fab fa-twitter-square" />
                </a>
              </div>
              <div className="p-4">
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </Roll>
        </div>
      </div>
    );
  }
}

export default AuthorsCard;
