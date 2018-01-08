import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import App, { Header } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it ('can use Sinon syntax', () => {
  expect(true).to.equal(true);
})

it ('has a header with App-header class', () => {
  const mountWrapper = mount(<App />)
  const shallowWrapper = shallow(<App />)
  expect(mountWrapper.find('header')).to.have.className('App-header')
  expect(shallowWrapper.contains(<Header />)).to.equal(true)
})
