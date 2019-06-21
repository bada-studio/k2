import React from 'react';
import './ContentBox.css'

const ContentBox = ({children}) => {
  return (
    <div className="ContentBox">
      {children}
    </div>
  );
};

export default ContentBox;
