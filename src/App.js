import {Grid, Card, Conditional, ListOfAnimals, SimpleStateful, Stateful, Events, ErrorBoundary, Orders} from './features/react-basics';

function App() {
	return (
		<>
			<Grid>
				<Card>
					<h2>Card title</h2>
					<p>card description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos, et
						fugit harum ipsa, laborum nam obcaecati officiis optio, pariatur quaerat quod reprehenderit
						repudiandae sequi sit sunt unde! Porro, tempora.</p>
				</Card>
				<Card>
					<h2>Conditional rendering</h2>
					<Conditional count="4"/>
					<Conditional count="5"/>
				</Card>
				<Card>
					<h2>Loops</h2>
					<ListOfAnimals />
				</Card>
				<Card>
					<h2>Events</h2>
					<Events />
				</Card>
				<Card>
					<h2>Simple state</h2>
					<SimpleStateful />
					<h2>State (object)</h2>
					<Stateful />
				</Card>
				<Card>
					<h2>Error boundaries</h2>
					<ErrorBoundary>
						<Orders />
					</ErrorBoundary>
					<ErrorBoundary>
						<Card>
							<Stateful />
						</Card>
					</ErrorBoundary>
				</Card>
			</Grid>
		</>
	)
}

export default App;
