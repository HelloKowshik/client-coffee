import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdateCoffee from './components/UpdateCoffee';
import AddCoffee from './components/AddCoffee';
import ShowCoffee from './components/ShowCoffee';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Users from './components/Users';
import AuthProvider from './provider/AuthProvider';


const routes = createBrowserRouter([
{
  path: '/',
  element: <App />,
  loader: () => fetch('http://localhost:5000/coffee')
},
{
  path: '/add-coffee',
  element: <AddCoffee />
},
{
  path: '/show/:id',
  element: <UpdateCoffee />,
  loader: ({params}) => fetch(`http://localhost:5000/show/${params.id}`)
},
{
  path: '/show-coffee/:id',
  element: <ShowCoffee />,
  loader: ({params}) => fetch(`http://localhost:5000/show-coffee/${params.id}`)  
},
{
  path: '/signup',
  element: <SignUp />
},
{
  path: '/signin',
  element: <Login />
},
{
  path: '/users',
  element: <Users />,
  loader: () => fetch('http://localhost:5000/users')
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
)
