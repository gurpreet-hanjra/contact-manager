import React from 'react';
import ReactDOM from 'react-dom';
import Sort from '../index';
import { shallow } from 'enzyme';

const handleSort = jest.fn();
const props = {
  sortOptions: [
    {
      value: 'firstName',
      label: 'First name'
    },
    {
      value: 'lastName',
      label: 'Last name'
    }
  ],
  handleSort
};

describe('Sort', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Sort {...props} />);
  });

  it('should shallow render the component', () => {
    expect(component).toBeDefined();
  });
});
