import React from 'react'

function FabMenuRes({setIsVisible}) {
  const handleAdd = () => {
    setIsVisible(true)
  }
  return (
    <div className="floating-container">
    <div className="floating-button">+</div>
    <div className="element-container">
      <span className="float-element" onClick={handleAdd}>
      <i class='bx bx-book-add' ></i>
      </span>
      <span className="float-element">
      <i class='bx bx-book'></i>
      </span>
    </div>
  </div>
  )
}

export default FabMenuRes