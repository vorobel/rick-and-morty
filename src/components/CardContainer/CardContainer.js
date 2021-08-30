import React from 'react';
import CardDefault from '../Card/Card'
import './cardContainer.css';


function CardContainer({cardsData}) {
  console.log(cardsData);
  return(
    <div className='container'>
      <ul className='cards-container'>
        {cardsData.map(item => {
          return (
            <CardDefault key={item.id} className='cards-container' cardsData={item}/>
          )
        })}

      </ul>
    </div>
  )
}

export default CardContainer;