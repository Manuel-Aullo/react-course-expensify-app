import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
test("should return remove expense action object",
() => {
	const action = removeExpense ({id: "12345"});
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "12345"
	})
});
test("should return edit expense action object",
() => {
	const action = editExpense ("12345",{note: "6789"});
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "12345",
		updates: {
			note: "6789"
		}
	})
});

test ("should setup add expense action valuesd with provided values", () =>{
	const expenseData = {
		description: "test1",
		amount: 1,
		createdAt: 1000,
		note: "add expense test"
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test ("should setup add expense action valuesd with default values", () =>{
	const action = addExpense();
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			description: "",
			note: "",
			amount: 0,
			createdAt: 0,
			id: expect.any(String)
		}
	});
});