import React from 'react';
import backgroundImage from '../components/images/burger.jpg';

const Back1 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '70vh',
      }}
    >
      {/* Your page content */}
    </div>
  );
};

export default Back1;
