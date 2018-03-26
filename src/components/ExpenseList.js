import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"

export const ExpenseList = (props) => (
	<div>
		{
			props.expenses.length === 0 ? (
					<p>No expenses</p>
				) : (
						<div>
							<h1> Expense List</h1>
							<div>
							{ props.expenses.map((expense, index) => {
								return <ExpenseListItem key={expense.id} {...expense} element={index + 1}/>;
							})}
							</div>
						</div>
					)
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters),
		filters: state.filters
	}
}

export default connect(mapStateToProps)(ExpenseList);