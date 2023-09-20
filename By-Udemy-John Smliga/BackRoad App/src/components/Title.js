import React from 'react'

const Title = ({title,subTitle}) => {
  return (
    <div>
      <div className="section-title">
        <h2>{title}<span>{subTitle}</span></h2>
      </div>
    </div>
  )
}

export default Title
