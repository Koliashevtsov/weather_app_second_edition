import React from 'react';

import './search-input.scss';

import { IconSearch } from '../icons';

const SearchInput = () => {
  return (
    <div className="search-input">
      <form>
        <div className="form-container">
          <input type="text"/>
          <IconSearch/>
        </div>
      </form>
    </div>
  );
}
export default SearchInput;
