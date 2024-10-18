import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import Surveys from '../../pages/Surveys';
import Chat from '../../pages/Chat';

export default createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      { element: <Home />, index: true },
      { path: ROUTES.company_surveys, element: <Surveys /> },
      { path: ROUTES.chat, element: <Chat /> },
    ],
  },
]);
