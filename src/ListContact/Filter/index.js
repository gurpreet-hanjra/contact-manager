import React from 'react';
import { Input } from 'semantic-ui-react';

const Filter = ({ handleFilter }) => (
  <div>
    <Input placeholder="Filter" onChange={handleFilter} />
  </div>
);

export default Filter;
