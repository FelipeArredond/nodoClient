import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import './index.css'
import ErrorPage from './pages/ErrorPage';
import LayoutPage from './pages/LayoutPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import CoursesPage from './pages/courses/CoursesPage';
import AdminPage from './pages/ admin/AdminPage';
import PaymentPage from './pages/payments/PaymentPage';
import HomePage from './pages/homepage/HomePage';
import MyProfile from './pages/profile/ProfilePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },{
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/signup",
        element: <SignUpPage/>
      },{
        path: "/courses",
        element: <CoursesPage/>
      },{
        path: "/admin",
        element: <AdminPage/>
      },{
        path: "/pagos",
        element: <PaymentPage/>
      },{
        path: "/my-profile",
        element: <MyProfile/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
