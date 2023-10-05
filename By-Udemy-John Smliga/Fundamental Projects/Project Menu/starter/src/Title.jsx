import React from 'react'

function Title() {
  return (
    <div className="title">
        <h2>{text || 'default Title'}</h2>
        <div className="title-underline"></div>
    </div>
  );
}

export default Title
