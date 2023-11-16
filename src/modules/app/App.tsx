import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  RouterProvider,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from 'react-router-dom';
import { ROUTES } from './routes';
import LogIn from '../login/LogIn';
import Home from '../home/home';

import styled from 'styled-components';

const App = () => {
  const Root = () => {
    return (
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={ROUTES.home()} element={<Root />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path={ROUTES.login()} element={<LogIn />} />
      </>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
