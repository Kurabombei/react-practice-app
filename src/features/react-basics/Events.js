import {ChildButtonComponent} from "./Button";

export function Events() {

	const clickHandler = (event) => {
		console.log(event);
	}
	return (
		<ChildButtonComponent onClick={clickHandler} text="click me!"/>
	);
}