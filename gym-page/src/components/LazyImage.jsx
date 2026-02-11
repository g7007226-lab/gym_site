import React from 'react';

const LazyImage = ({ src, alt, className = '', ...props }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;