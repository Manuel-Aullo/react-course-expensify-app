import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({element, description, amount, createdAt, id}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{element} - {description}</h3>
		</Link>
		<ul>
			<li>Amount: {amount}</li>
			<li>Date created: {createdAt}</li>
		</ul>
	</div>
);


export default ExpenseListItem;