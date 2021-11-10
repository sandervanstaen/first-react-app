import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, HandleSearch }) => (
  <div>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={HandleSearch}
    />
  </div>
);
