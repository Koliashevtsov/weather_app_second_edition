import React from 'react';

import './search-input.scss';

import { IconSearch } from '../icons';

const SearchInput = (props) => {
  const { value, handleChange, handleSubmit } = props;
  return (
    <div className="search-input">
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <input type="text" value={value} onChange={handleChange}/>
          <IconSearch onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  );
}
export default SearchInput;
