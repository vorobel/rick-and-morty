import React from 'react';
import './button.css'

function ButtonDefault({ text, hadleFavorite}) {
  return(
    <button className='btn' onClick={hadleFavorite}>{text}</button>
  )
}

export default ButtonDefault;