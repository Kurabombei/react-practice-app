import * as PropTypes from "prop-types";

export function ChildButtonComponent({onClick, text}) {
	return <button onClick={onClick}>{text}</button>;
}

ChildButtonComponent.propTypes = {onClick: PropTypes.func};