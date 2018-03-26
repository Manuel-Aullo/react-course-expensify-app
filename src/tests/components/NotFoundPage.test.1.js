import React from "react";
import {shallow} from "enzyme";
import toJSON from "enzyme-to-json";
import {AddExpensePage} from "../../components/AddExpensePage";

test("Should render AddExpensePage correctly", () => {
	const onSubmit = jest.fn();
	const history = { push: jest.fn() };
	const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
	expect(toJSON(wrapper)).toMatchSnapshot();
});