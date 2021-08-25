import React from 'react';
import './header.css';

function Header({ favouriteCount }) {
  return (
    <header className='header'>
      <div className='container header-container'>
        <nav>
          <ul className='header-menu'>
            <li className='active-link'>
              <a href='/#'>Characters</a>
            </li>
            <li>
              <a href='/#'>Favourites</a>
            </li>
          </ul>
        </nav>
        <div>
          <i className="far fa-heart"></i>
          <span>{favouriteCount}</span>
        </div>
      </div>
    </header>
  )
}

export default Header;