import React from "react";
import {shallow} from "enzyme";
import toJSON from "enzyme-to-json";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("Should render ExpenseForm correctly", () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render ExpenseForm correctly with data", () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[2]}/>);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find("form").simulate("submit", {
		preventDefault: () => { }
	});
	expect(wrapper.state("error")).toBe(true);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should set description on input change", () => {
	const wrapper = shallow(<ExpenseForm />);
	const value = "New description";
	wrapper.find("input").at(0).simulate("change", {
		target: { value }
	});
	expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
	const wrapper = shallow(<ExpenseForm />);
	const value = "New note";
	wrapper.find("textarea").at(0).simulate("change", {
		target: { value }
	});
	expect(wrapper.state("note")).toBe(value);
});

test("should set an amount if valid input", () => {
	const wrapper = shallow(<ExpenseForm />);
	const value = "23.50";
	wrapper.find("input").at(1).simulate("change", {
		target: { value }
	});
	expect(wrapper.state("amount")).toBe(value);
});

test("should not set an amount if invalid input", () => {
	const wrapper = shallow(<ExpenseForm />);
	const value = "12.222";
	wrapper.find("input").at(0).simulate("change", {
		target: { value }
	});
	expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
	wrapper.find("form").simulate("submit", {
		preventDefault: () => { }
	});
	expect(wrapper.state("error")).toBe(false);
	expect(onSubmitSpy).toHaveBeenCalledWith({
		description: expenses[1].description,
		note: expenses[1].note,
		amount: expenses[1].amount,
		createdAt: expenses[1].createdAt
	})
});

test("should set new date onDateChange", () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find("SingleDatePicker").prop("onDateChange")(now);
	expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set calendar focus on change", () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find("SingleDatePicker").prop("onFocusChange")({focused});
	expect(wrapper.state("calendarFocused")).toBe(focused);
});


