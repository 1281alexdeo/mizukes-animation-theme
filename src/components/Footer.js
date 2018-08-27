import React from 'react';

const Footer = () => {
  return (
    <div className="py-4 mt-4 bg-primary-lg">
      <div className="container">
        <div className="row col-md-6 text-center ml-auto">
          <p className="lead text-white">
            {' '}
            Copyright <i class="fas fa-copyright">&copy;</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
