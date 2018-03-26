import React from "react";
import {shallow} from "enzyme";
import toJSON from "enzyme-to-json";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("Should render ExpenseListItem", () => {
	const wrapper = shallow(<ExpenseListItem key={expenses[1].id} {...expenses[1]} element={2}/>);
	expect(toJSON(wrapper)).toMatchSnapshot();
});