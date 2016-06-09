import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Comments from '../';

describe('<Comments />', () => {
  it('should render a button & text', () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper.find('ScrollView').length).to.equal(1);
    expect(wrapper.find('Text').length).to.equal(1);
  });
});
