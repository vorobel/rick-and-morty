import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import RenderFilter from './components/RenderFilter/RenderFilter';
import CardContainer from './components/CardContainer/CardContainer';

import './app.css';

function App() {
  const [state, setState] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0)
  const [curPersonsList, setCurPersonsList] = useState([1,2,3,4]);

  function dataFetch(curPersonsList) {
    fetch(`https://rickandmortyapi.com/api/character/${curPersonsList}`)
      .then(response => response.json())
      .then(data => setState(data.map(item => {
        return {
          ...item,
          favorite: false,
        }
      })))
  }

  useEffect(() => {
    dataFetch(curPersonsList)
  }, [])


  useEffect(() => {
    let result = 0;
    state.map(item => {
      if (item.favorite) {
        result++;
      }
    })
    console.log(result);
    setFavoriteCount(result)
  }, [state])

  const hadleFavorite = (id) => {
    setState(state.map(item => {
      if (item.id === id) {
        item.favorite = !item.favorite;
      }
      return item
    }))
  }

  return (
    <div className="App">
      <Header favoriteCount={favoriteCount} />
      <RenderFilter />
      <CardContainer cardsData={state} hadleFavorite={hadleFavorite}/>
    </div>
  );
}

export default App;
