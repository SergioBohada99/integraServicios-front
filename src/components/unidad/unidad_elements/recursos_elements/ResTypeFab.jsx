import React from 'react'

function ResTypeFab({setIsVisible}) {
  const handleAdd = () => {
    setIsVisible(true)
  }
  return (
    <div className="floating-container">
    <div className="floating-button">+</div>
    <div className="element-container">
      <span className="float-element" onClick={handleAdd}>
      <i class='bx bx-bookmark-alt-plus'></i>
      </span>
      <span className="float-element">
      <i class='bx bx-bookmark-alt-minus'></i>
      </span>
    </div>
  </div>
  )
}

export default ResTypeFab