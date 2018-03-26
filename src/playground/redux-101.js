import {createStore} from "redux";
const incrementCount = ({ incrementBy = 1} = {}) => ({
	type: "INCREMENT",
	incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
	type: "DECREMENT",
	decrementBy
});

const setCount = ({ setCount = 1010101001} = {}) => ({
	type: "SET",
	setCount
});

const resetCount = ({ count = 0} = {}) => ({
	type: "RESET"
});
// Reducers
// 1. Reducers are pure functions (old state and action). They don't interact with anything out of his scope
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
	switch (action.type) {
		case "INCREMENT":
 			return {
				count: state.count + action.incrementBy
			};
		case "DECREMENT":
			return {
				count: state.count - action.decrementBy
			};
		case "SET":
			return {
				count: action.setCount
			};
		case "RESET":
			return {
				count: 0
			};
		default:
			return state;
	}

};

const store = createStore(countReducer);

// subscribe fires everytime store value changes
const unsubscribe = store.subscribe(() =>{
	console.log(store.getState());
});
store.dispatch(incrementCount());
store.dispatch(incrementCount({
	incrementBy:5
}));
// store.dispatch({
// 	type: "INCREMENT"
// });

// unsubscribe();

// store.dispatch({
// 	type: "INCREMENT",
// 	incrementBy: 5
// });

// store.dispatch({
// 	type: "RESET"
// });

// store.dispatch({
// 	type: "DECREMENT"
// });
store.dispatch(decrementCount());
store.dispatch(decrementCount({
	decrementBy:10
}));

store.dispatch(setCount({
	setCount: 101
}));
store.dispatch(resetCount());

// store.dispatch({
// 	type: "DECREMENT",
// 	decrementBy: 10
// });

// store.dispatch({
// 	type: "SET",
// 	count: 101
// });