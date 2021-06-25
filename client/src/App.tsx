import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				{/* Navigation menu */}
				<nav>
					<ul>
						<li>
							<Link to='/'>Homepage</Link>
						</li>
						<li>
							<Link to='/checkout'>Checkout</Link>
						</li>
						<li>
							<Link to='/admin'>Admin</Link>
						</li>
					</ul>
				</nav>

				{/* Render pages */}
				<Switch>
					<Route exact path='/'>
						<>
							<h1>This is the MAIN page</h1>
						</>
					</Route>
					<Route path='/checkout'>
						<>
							<h1>This is the CHECKOUT page</h1>
						</>
					</Route>
					<Route path='/admin'>
						<>
							<h1>This is the ADMIN page</h1>
						</>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
