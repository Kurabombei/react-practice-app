import * as PropTypes from "prop-types";

const data = [
	{ id: 1, name: 'Fido 🐕' },
	{ id: 2, name: 'Snowball 🐈' },
	{ id: 3, name: 'Murph 🐈‍⬛' },
	{ id: 4, name: 'Zelda 🐈' },
];

function ListItem(props) {
	return <li>{props.name}</li>;
}

ListItem.propTypes = {name: PropTypes.any};

export function ListOfAnimals() {
	return (
		<ul>
			{data && // Only render if there's data - see 'Conditional Rendering'
				data.map(({ id, name }) => {
					return <ListItem key={id} name={name}/>;
				})}
		</ul>
	);
}