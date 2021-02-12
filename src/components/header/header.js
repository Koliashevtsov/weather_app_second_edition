import React from 'react';

import './header.scss';

import PositionContainer from '../../containers/position-container';
import SearchInputContainer from '../../containers/search-input-container';

const Header = () => {
  return (
    <div className="header">
      <PositionContainer/>
      <SearchInputContainer/>
    </div>
  );
}
export default Header;
