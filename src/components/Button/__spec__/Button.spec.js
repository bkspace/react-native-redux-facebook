import React from 'react';
import { Text } from 'react-native';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../';
import styles from '../styles';

describe('<Button />', () => {
  it('should render a button & text', () => {
    const wrapper = shallow(<Button buttonText={'fooBar'} onButtonPressed={() => null} />);
    expect(wrapper.find('TouchableHighlight').length).to.equal(1);
    expect(wrapper.find('Text').length).to.equal(1);
  });

  it('should render text prop with correct styles', () => {
    const wrapper = shallow(<Button buttonText={'fooBar'} onButtonPressed={() => null} />);
    // two different ways to test the same thing
    expect(wrapper.find('Text')).to.contain('fooBar');
    expect(wrapper).to.contain(<Text style={[styles.buttonText, undefined]}>fooBar</Text>);
  });

  it('should merge styles passed in as props', () => {
    const stylesToMerge = {
      buttonStyle: {},
      button: {},
    };
    const wrapper = shallow(
      <Button
        buttonText={'fooBar'}
        onButtonPressed={() => null}
        styles={stylesToMerge}
      />
    );
    expect(wrapper.find('TouchableHighlight').props().style.length).to.equal(2);
    expect(wrapper.find('Text').props().style.length).to.equal(2);
  });
});
