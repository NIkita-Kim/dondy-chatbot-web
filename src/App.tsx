import './App.css';
import { Outlet } from '@tanstack/react-location';
import { Router } from './lib/router/Router';

const App = () => {
  return (
    <Router>
      <Outlet />
    </Router>
  )
}

export default App
