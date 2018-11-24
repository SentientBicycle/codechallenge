import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
	it("Renders properly", () => {
		const app = shallow(<App />);
		expect(app).toMatchSnapshot();
	});
});
