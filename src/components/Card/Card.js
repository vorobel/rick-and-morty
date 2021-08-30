import React from 'react';
import ButtonDefault from '../Button/Button'
import './card.css';


function CardDefault({ cardsData }) {
  console.log(cardsData);
  const { image, name, species, status, favourite } = cardsData;


  return(
    <li className='card-item'>
      <div className='card-item-wrapper'>
        <img src={image} alt='peson'/>
      </div>
      <div className='card-content'>
        <h2>{name}</h2>
        <div className='card-text'>
          <p>{species}</p>
          <span className='dash'>-</span>
          <p>{status}</p>
        </div>

        {favourite ? <ButtonDefault text='Remove from Favourites' /> : <ButtonDefault text='Add to Favourites' />}
      </div>
    </li>
  )
}

export default CardDefault;