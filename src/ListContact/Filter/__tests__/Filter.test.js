import React from 'react';
import ReactDOM from 'react-dom';
import Filter from '../index.js';
import { shallow } from 'enzyme';

const props = { handleFilter: jest.fn() };

describe('Filter', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Filter {...props} />);
  });

  it('should shallow render the component', () => {
    expect(component).toBeDefined();
  });
});
