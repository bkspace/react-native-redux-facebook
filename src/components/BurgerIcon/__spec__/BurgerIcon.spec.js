import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import BurgerIcon from '../';

describe('<BurgerIcon />', () => {
  const contextSpy = sinon.spy();
  let mockContext;

  beforeEach(() => {
    mockContext = {
      drawer: {
        open: contextSpy,
      },
    };
  });

  it('should render a button & icon', () => {
    const wrapper = shallow(<BurgerIcon />, { context: mockContext });
    expect(wrapper.find('TouchableOpacity').length).to.equal(1);
    expect(wrapper.find('Icon').length).to.equal(1);
  });

  it('should call drawer.open when pressed', () => {
    const wrapper = shallow(<BurgerIcon />, { context: mockContext });
    wrapper.simulate('press');
    expect(contextSpy.called).to.equal(true);
  });
});
