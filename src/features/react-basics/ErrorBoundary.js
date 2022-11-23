import React from "react";
import {Card} from "./Card";

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log('something went wrong!', error, errorInfo);
	}

	render() {
		if(this.state.hasError) {
			return (
				<Card>
					<h2>Fallback UI (probably some loading)</h2>
				</Card>);
		}

		return this.props.children;
	}
}