import React from 'react';
import CardDefault from '../Card/Card'
import './cardContainer.css';


function CardContainer({ cardsData, hadleFavourite}) {

  return(
    <div className='container'>
      <ul className='cards-container'>
        {cardsData.map(item => {
          return (
            <CardDefault key={item.id} className='cards-container' cardsData={item} hadleFavourite={() => {hadleFavourite(item.id)}}/>
          )
        })}

      </ul>
    </div>
  )
}

export default CardContainer;