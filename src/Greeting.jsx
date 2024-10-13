import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div>
      {name ? <h1>Привіт, {name}!</h1> : <h1>Привіт, Гість!</h1>}
    </div>
  );
};

export default Greeting;