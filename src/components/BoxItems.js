import React from 'react';

const BoxItems = ({ bg, h3, p }) => {
  return (
    <div>
      <card className={bg}>
        <div className="card-body">
          <h3 className={h3}>Be better</h3>
          <p className={p}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
            non.
          </p>
        </div>
      </card>
    </div>
  );
};
export default BoxItems;
