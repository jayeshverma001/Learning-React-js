import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        return <menuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  )
}

export default Menu
