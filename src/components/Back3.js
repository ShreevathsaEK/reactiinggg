import React from 'react';
import backgroundImage from '../components/images/download2.jpeg';

const Back3 = () => {
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

export default Back3;
