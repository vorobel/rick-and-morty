import React, { useState, useEffect } from 'react';
import './app.css';
import Header from './components/Header/Header';
import RenderFilter from './components/RenderFilter/RenderFilter';
import CardContainer from './components/CardContainer/CardContainer';


function App() {
  const [state, setState] = useState([]);


  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => data.results.map(item => {
        return {
          ...item,
          favourite: false,
        }
      }))
      .then(data => setState(data))
  }, [])

  const favouriteCountCalc = () => {
    let result = 0;
    (state.map(item => {
      if (item.favourite) {
        result++;
      }
    }));
    return result
  }
  const favouriteNumber = favouriteCountCalc(state);

  const hadleFavourite = (id) => {
    state.map(item => {
      if(item.id === id) {
        item.favourite = !item.favourite;
      }
    })
  }




  return (
    <div className="App">
      <Header favouriteCount={favouriteNumber} />
      <RenderFilter />
      <CardContainer cardsData={state} hadleFavourite={hadleFavourite}/>
    </div>
  );
}

export default App;
