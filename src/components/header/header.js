import React from 'react';

import './header.scss';

import Position from '../position';
import SearchInput from '../search-input';

const Header = () => {
  return (
    <div className="header">
      <Position/>
      <SearchInput/>
    </div>
  );
}
export default Header;
