import React from 'react';
import { Select } from 'semantic-ui-react';

const Sort = ({ sortOptions, handleSort }) => (
  <div>
    <Select onChange={handleSort} options={sortOptions} placeholder="Sort" />
  </div>
);

export default Sort;
