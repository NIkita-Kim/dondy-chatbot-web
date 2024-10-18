import { FC, PropsWithChildren } from 'react';
import { ReactLocation, Route, Router as TanstackRouter } from '@tanstack/react-location';
import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/Home';

const routes: Route[] = [
  {
    element: <MainLayout />,
    children: [
      { element: <Home /> },
    ],
  },
];

const location = new ReactLocation();

export const Router: FC<PropsWithChildren> = ({ children }) => (
  <TanstackRouter routes={routes} location={location}>
    { children }
  </TanstackRouter>
);
