import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';

export default createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      { element: <Home />, index: true },
    ],
  },
]);
