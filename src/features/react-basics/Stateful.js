import {useState} from "react";
import {ChildButtonComponent} from "./Button";

export function Stateful() {
	const [state, setState] = useState({counter: 0, user: 'Bob'});

	const handleClick = (event) => {
		setState({
			...state,
			counter: state.counter + 1
		})
	}
	return (
		<>
			<p>Count of {state.user} is: {state.counter}</p>
			<ChildButtonComponent onClick={handleClick} text="+"/>
		</>
	);
}