import React from 'react';
import DarkMode from './DarkMode';

function Header() {

    return (
    <div>
      <div className='headerBgImage'>
        <div className='header'>
          <h1>Todo</h1>
          <DarkMode />
        </div>
      </div>
    </div>
    );
  }
  
  export default Header;