import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
