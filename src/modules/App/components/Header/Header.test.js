import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Header", () =>{
	it('Renders properly', () => {
	  const header = shallow(<Header/>);
	  expect(header).toMatchSnapshot();
	});
});