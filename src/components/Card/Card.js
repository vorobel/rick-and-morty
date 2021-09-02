import React from 'react';
import ButtonDefault from '../Button/Button'
import './card.css';


function CardDefault({ cardsData, hadleFavorite }) {
  const { image, name, species, status, favorite, id } = cardsData;
  return (
    <li className='card-item'>

      <img src={image} alt='peson' />

      <div className='card-content'>
        <h2>{name}</h2>
        <div className='card-text'>
          <p>{species}</p>
          <span className='dash'>-</span>
          <p>{status}</p>
        </div>

        {favorite ?
          <ButtonDefault
            hadleFavorite={() => hadleFavorite(id)}
            text='Remove from Favorites'
            id={id} /> :
          <ButtonDefault
            hadleFavorite={() => hadleFavorite(id)}
            text='Add to Favorites'
            id={id} />
        }
      </div>
    </li>
  )
}

export default CardDefault;