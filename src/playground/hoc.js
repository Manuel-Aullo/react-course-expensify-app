// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "React";
import ReactDOM from "react-dom";
console.log("HOC");

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.userInfo}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info, please don't share!</p>}
			<WrappedComponent {...props}/>
		</div>
	);
 };

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{!props.isAuthenticated ? <p>You need to log in to see the info</p> : <WrappedComponent {...props}/>}
		</div>
	);
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {false} userInfo="Here are the deatils"/>, document.getElementById("app"));
// ReactDOM.render(<AdminInfo isAdmin={false} userInfo="Here are the deatils"/>, document.getElementById("app"));