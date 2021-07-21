import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Homepage from './pages/homepage/homepage';
import ShowProduct from './pages/show-product/show-product';
import Menu from './organisms/menu/menu';
import LinkRouteProps from './atoms/link-route/dto';
import Routes from './appRoutes';
import './App.scss';

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [filteredRoutes, setFilteredRoutes] = useState<LinkRouteProps[]>([]);

  const checkIfUserIsAuthenticated = (): void => {
    const currentUserFound = !!localStorage.getItem('userID');
    setAuthenticated(currentUserFound);
  };

  useEffect(() => {
    checkIfUserIsAuthenticated();
    filterRoutes();
  }, []);

  const filterRoutes = (): void => {
    interface RoutesProps {
      url: string;
      text: string;
      requiresAuth?: boolean;
    }

    const newRoutes = Routes.reduce(
      (acc: LinkRouteProps[], curr: RoutesProps) => {
        if (!curr.requiresAuth || (authenticated && curr.requiresAuth)) {
          const { url, text } = curr;
          acc.push({ ...{ url, content: text } });
        }
        return acc;
      },
      []
    );

    setFilteredRoutes(newRoutes);
  };

  return (
    <div
      className='App'
      style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}
    >
      <Router>
        {/* Navigation menu */}
        <Menu {...{ menuLinks: filteredRoutes }} />

        {/* Render pages */}
        <Switch>
          <Route
            exact
            path='/'
            component={() => {
              return (<Homepage />) as JSX.Element;
            }}
          />
          <Route
            path='/product/:id'
            component={() => {
              return (<ShowProduct />) as JSX.Element;
            }}
          />
          <Route
            path='/checkout'
            component={() => {
              return (
                <>
                  <h1>This is the CHECKOUT page</h1>
                </>
              ) as JSX.Element;
            }}
          />

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
          <Route
            path='/admin'
            component={() => {
              return (
                <>
                  <h1>This is the ADMIN page</h1>
                </>
              ) as JSX.Element;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
