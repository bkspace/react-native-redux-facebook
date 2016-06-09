import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from '../';

describe('<Login />', () => {
  it('should show a login button with "Hello" text, with initial state', () => {
    const wrapper = shallow(
      <Login
        authenticating={false}
        onLoginPressed={() => null}
      />
    );
    expect(wrapper.find('Button').length).to.equal(1);
    expect(wrapper.find('Text').props().children).to.equal('Hello');
  });

  it('should hide the login button, show a spinner, when authenticating', () => {
    const wrapper = shallow(
      <Login
        authenticating={true}
        onLoginPressed={() => null}
      />
    );
    expect(wrapper.children().length).to.equal(2);
    expect(wrapper.find('Button').length).to.equal(0);
    expect(wrapper.children().last().props().isVisible).to.equal(true);
  });

  it('should display a different text, when welcomeText exists', () => {
    const wrapper = shallow(
      <Login
        authenticating={false}
        onLoginPressed={() => null}
        welcomeText={'fooBar'}
      />
    );
    expect(wrapper.find('Text').props().children).to.equal('fooBar');
  });

  it('should display an error message, when authError exists', () => {
    const wrapper = shallow(
      <Login
        authenticating={false}
        onLoginPressed={() => null}
        authError={'fooError'}
      />
    );
    expect(wrapper.find('Notification').length).to.equal(1);
  });
});
