import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/login/login';

function App() {
	const [authenticated, setAuthenticated] = useState<boolean>(false);

	const checkIfUserIsAuthenticated = (): void => {
		const currentUserFound = !!localStorage.getItem('userID');
		setAuthenticated(currentUserFound);
	};

	useEffect(() => {
		checkIfUserIsAuthenticated();
	}, []);

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
						{authenticated ? (
							<li>
								<Link to='/admin'>Admin</Link>
							</li>
						) : (
							<li>
								<Link to='/login'>Login</Link>
							</li>
						)}
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
					<Route path='/login'>
						<Login
							{...{
								pageTitle: 'Login page',
								usernameFieldData: {
									textFieldPlaceholder: 'Insert your username',
									labelText: 'Username',
									textFieldName: 'username',
								},
								passwordFieldData: {
									textFieldPlaceholder: 'Insert your password',
									labelText: 'Password',
									textFieldName: 'password',
								},
							}}
						/>
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
