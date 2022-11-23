export function Conditional({count}) {
	return (
		<article>
			<nav>Navbar</nav>
			count is {count}
			{
				count % 2 === 0 ? <p>Count is even</p> : <p>Count is not even</p>
			}
			{/*something or nothing*/}
			{count % 2 === 0 && <p>Count is surely even</p>}
			{count % 2 === 0 ? <p>I can assure you</p> : null}
		</article>
	)
}