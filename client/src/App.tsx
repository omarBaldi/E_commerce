import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/login';
import { LinkRoute } from './atoms/link-route/link-route';
import Routes from './appRoutes';

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [filteredRoutes, setFilteredRoutes] = useState<any[]>([]);

  const checkIfUserIsAuthenticated = (): void => {
    const currentUserFound = !!localStorage.getItem('userID');
    setAuthenticated(currentUserFound);
  };

  useEffect(() => {
    checkIfUserIsAuthenticated();
    filterRoutes();
  }, []);

  const filterRoutes = (): void => {
    const newRoutes = Routes.reduce((acc: any[], curr) => {
      if (!curr.requiresAuth || (authenticated && curr.requiresAuth)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    setFilteredRoutes(newRoutes);
  };

  return (
    <div className='App'>
      <Router>
        {/* Navigation menu */}
        <nav>
          <ul>
            {filteredRoutes.map((currentRoute, index) => {
              return (
                <li key={index}>
                  <LinkRoute {...currentRoute} />
                </li>
              );
            })}
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
