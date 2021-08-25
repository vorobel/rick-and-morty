import React, {useState, useEffect} from 'react';
import './app.css';
import Header from './components/Header/Header';
import RenderFilter from './components/RenderFilter/RenderFilter';


function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setState(data))
  }, [])
  console.log(state);



  return (
    <div className="App">
      <Header favouriteCount='2'/>
      <RenderFilter />
    </div>
  );
}

export default App;
