import {ChildButtonComponent} from "./Button";
import {useState} from "react";

export function SimpleStateful() {
	const [count, setCount] = useState(0);

	return (
		<>
			<p>Count is: {count}</p>
			<ChildButtonComponent onClick={() => setCount(count + 1)} text="+"/>
		</>
	);
}