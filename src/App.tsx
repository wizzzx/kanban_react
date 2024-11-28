import '../public/styles/globals.scss';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage.tsx';
import NotFoundPage from './pages/NotFound/NotFoundPage.tsx';
import RegisterPage from './pages/Register/RegisterPage.tsx';
import LoginPage from './pages/Login/LoginPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
