import React from "react";
import {shallow} from "enzyme";
import toJSON from "enzyme-to-json";
import ExpenseListFilters from "../../components/ExpenseListFilters";
import expenses from "../fixtures/expenses";

test("It must render ExpenseListFilter correctly", () =>{
	const wrapper = shallow(<ExpenseListFilters key={expenses[1].id} {...expenses[1]} element={2}/>);
	expect(toJSON(wrapper)).toMatchSnapshot();
});