import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notification from '../';

describe('<Notification />', () => {
  it('should render an error message', () => {
    const wrapper = shallow(<Notification errorMessage={'fooError'} />);
    expect(wrapper.find('Text').length).to.equal(1);
    expect(wrapper.find('Text')).to.contain('fooError');
  });
});
