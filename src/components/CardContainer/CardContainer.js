import React from 'react';
import CardDefault from '../Card/Card'
import './cardContainer.css';


function CardContainer({ cardsData, hadleFavorite}) {

  return(
    <div className='container'>
      <ul className='cards-container'>
        {cardsData.map(item => {
          return (
            <CardDefault key={item.id} className='cards-container' cardsData={item} hadleFavorite={hadleFavorite}/>
          )
        })}

      </ul>
    </div>
  )
}

export default CardContainer;