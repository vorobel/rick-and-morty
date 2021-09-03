import React from 'react';
import './navigation.css'

function Navigation({ navForvard, curPersonsList, navBack }) {

  return(
    <div className='container nav-container'>
      Page 1 of 34 
      <button onClick={() => navBack(curPersonsList)}> &lt;&lt; prev</button>
      <button onClick={() => navForvard(curPersonsList)}> &gt;&gt; next</button>
    </div>
  )
}

export default Navigation;