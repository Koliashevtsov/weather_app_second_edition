import React from 'react';

const IconSearch = ({ onClick }) => {
  return (
    <div onClick={onClick}
      className="icon-search" style={{"line-height": 1, "padding": 1 + "px", cursor: "pointer"}}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7179 13.0671H14.4421L19.0163 17.6504L17.6504 19.0163L13.0671 14.4421V13.7179L12.8196 13.4613C11.7746 14.3596 10.4179 14.9004 8.94208 14.9004C5.65125 14.9004 2.98375 12.2329 2.98375 8.9421C2.98375 5.65126 5.65125 2.98376 8.94208 2.98376C12.2329 2.98376 14.9004 5.65126 14.9004 8.9421C14.9004 10.4179 14.3596 11.7746 13.4613 12.8196L13.7179 13.0671ZM4.81708 8.9421C4.81708 11.2246 6.65958 13.0671 8.94208 13.0671C11.2246 13.0671 13.0671 11.2246 13.0671 8.9421C13.0671 6.6596 11.2246 4.8171 8.94208 4.8171C6.65958 4.8171 4.81708 6.6596 4.81708 8.9421Z" fill="white"/>
      </svg>
    </div>
  );
}
export default IconSearch;
