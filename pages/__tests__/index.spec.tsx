import * as React from 'react';
import renderer from 'react-test-renderer';
import Home from 'pages/index';
import { shallow, mount } from 'enzyme';
import Head from 'next/head';

describe('Home', () => {
  test('Title is template', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h1').text()).toEqual('template');
  });

  test(`Home snapshot`, () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
