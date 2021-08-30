import React, {useState, useEffect} from 'react';
import './app.css';
import Header from './components/Header/Header';
import RenderFilter from './components/RenderFilter/RenderFilter';
import CardContainer from './components/CardContainer/CardContainer';


function App() {
  const [state, setState] = useState([
    
  ]);
  

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => data.results.map(item => {
        return {...item, favourite: false}
      }))
      .then(data => setState(data))
  }, [])


  return (
    <div className="App">
      <Header favouriteCount='2'/>
      <RenderFilter />
      <CardContainer cardsData={state}/>
    </div>
  );
}

export default App;
