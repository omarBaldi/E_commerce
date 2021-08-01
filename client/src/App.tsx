import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Homepage from './pages/homepage/homepage';
import ShowProduct from './pages/show-product/show-product';
import Checkout from './pages/checkout/checkout';
import Menu from './organisms/menu/menu';
import LinkRouteProps from './atoms/link-route/dto';
import Routes from './appRoutes';
import './App.scss';
import { Product } from './molecules/product-card/dto';
import API from './API';
import { APIStateInterface } from './pages/homepage/dto';

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [filteredRoutes, setFilteredRoutes] = useState<LinkRouteProps[]>([]);
  const [productsCart, setProductsCart] = useState<
    (Product & { currentNumberSelected: number })[]
  >([]);
  const [APIState, setAPIState] = useState<APIStateInterface>({
    productsData: [],
    error: '',
    loading: false,
  });

  const updateAPIState = (
    key: string,
    value: boolean | Product[] | string
  ): void => {
    setAPIState((prevAPIState) => ({
      ...prevAPIState,
      [key]: value,
    }));
  };

  const getAllProducts = async (): Promise<void> => {
    updateAPIState('loading', true);

    try {
      const productsRetrieved = await API.retrieveProducts();
      updateAPIState('productsData', productsRetrieved);
    } catch (error) {
      updateAPIState('error', error.message);
    } finally {
      updateAPIState('loading', false);
    }
  };

  const checkIfUserIsAuthenticated = (): void => {
    const currentUserFound: boolean = !!localStorage.getItem('userID');
    setAuthenticated(currentUserFound);
  };

  useEffect(() => {
    getAllProducts();
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

  const addProductToCart = (productToAdd: Product): void => {
    setProductsCart((prevAddedProductsCart) => {
      const productFound = prevAddedProductsCart.find(
        (el) => el.id === productToAdd.id
      );

      if (productFound) {
        productFound.currentNumberSelected += 1;
        return [...prevAddedProductsCart];
      } else {
        return [
          ...prevAddedProductsCart,
          {
            ...{
              ...productToAdd,
              currentNumberSelected: 0,
            },
          },
        ];
      }
    });
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
              return (
                <Homepage
                  {...{
                    title: 'This is the title for the homepage',
                    result: APIState,
                    callbackProductAdded: addProductToCart,
                  }}
                />
              ) as JSX.Element;
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
              return (<Checkout {...{ productsCart }} />) as JSX.Element;
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
