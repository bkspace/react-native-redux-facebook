import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Dash from '../';

describe('<Dash />', () => {
  it('should render a button & text', () => {
    const wrapper = shallow(<Dash />);
    expect(wrapper.find('ScrollView').length).to.equal(1);
    expect(wrapper.find('Text').length).to.equal(1);
  });
});
