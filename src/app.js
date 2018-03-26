import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {
	addExpense,
	removeExpense,
	editExpense
} from "./actions/expenses"
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from "./actions/filters";
import expensesReducer from "./reducers/expenses";
import filtersReducer from "./reducers/filters";
import getVisibleExpenses from "./selectors/expenses"
import "normalize.css/normalize.css";
import "./styles/styles.scss"
import "react-dates/lib/css/_datepicker.css"

const store = configureStore();

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
	description: "Water bill",
	amount: 500,
	createdAt: -21000

}));

const expenseTwo = store.dispatch(addExpense({
	description: "Gas bill",
	amount: 1000,
	createdAt: -1000
}));

const expenseThree = store.dispatch(addExpense({
	description: "Dentist bill",
	amount: 100000,
	createdAt: -1500
}));

// store.dispatch(setTextFilter("gas"));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

const appRoot = document.getElementById("app");
ReactDOM.render(jsx, appRoot);

class OldSyntax {
	constructor() {
		this.name = "Mike";
		this.getGreeting = this.getGreeting.bind(this);
	}
	getGreeting() {
		return `Hi, my name is ${this.name}.`;
	}
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// -------------------

class NewSyntax {
	name = "Elchu";
	getGreeting = () => {
		return `Hi, my name is ${this.name}`;
	};
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());