import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({element, description, amount, createdAt, id}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{element} - {description}</h3>
		</Link>
		<ul>
			<li>Amount: {numeral(amount / 100).format("$0,00.0")}</li>
			<li>Date created: {moment(createdAt).format("MMMM Do YYYY")}</li>
		</ul>
	</div>
);

export default ExpenseListItem;