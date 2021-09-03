import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import RenderFilter from './components/RenderFilter/RenderFilter';
import CardContainer from './components/CardContainer/CardContainer';
import Navigation from './components/Navigation/Navigation';

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

  function arrDec(arr) {
    return arr.map(item => item - arr.length)
  }

  const navForvard = (curPersonsList) => {
    setCurPersonsList(curPersonsList.map(item => item + curPersonsList.length))
    dataFetch(curPersonsList)
    console.log(curPersonsList);
  }

  const navBack = (curPersonsList) => {
    if (curPersonsList[0] >= 1) {
      setCurPersonsList(curPersonsList.map(item => item - curPersonsList.length))
      dataFetch(curPersonsList)
      console.log(curPersonsList);
    }
  }

  return (
    <div className="App">
      <Header favoriteCount={favoriteCount} />
      <RenderFilter />
      <CardContainer cardsData={state} hadleFavorite={hadleFavorite}/>
      <Navigation navForvard={navForvard} navBack={navBack} curPersonsList={curPersonsList}/>
    </div>
  );
}

export default App;
