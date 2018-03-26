import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
	const state = expensesReducer(undefined, { type: "@@INIT"});
	expect(state).toEqual([]);
});

test("should remove expense by id",() => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0],expenses[2]]);
});

test("should not remove expense if id is not found",() => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: "expenses[4].id"
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("should add an expense", () => {
	const expense = {
		id: "4",
		description: "Disc4",
		note: "",
		amount: 100000,
		createdAt: 1500
	};
	const action = {
		type: "ADD_EXPENSE",
		expense
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
	const note = "Modified expense";
	const action = {
		type: "EDIT_EXPENSE",
		id: expenses[2].id,
		updates: {
			note
		}
	}
	const state = expensesReducer(expenses, action);
	expect(state[2].note).toBe(note);
});

test("should not edit an expense if id is not found", () => {
	const note = "Modified expense";
	const action = {
		type: "EDIT_EXPENSE",
		id: "expenses[2].id",
		updates: {
			note
		}
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});