import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './lib/router/Router';

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
