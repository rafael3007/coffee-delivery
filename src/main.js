import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Success } from './pages/Sucess';
import { App } from './App';
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            {
                path: '/',
                element: _jsx(Home, {}),
            },
            {
                path: '/cart',
                element: _jsx(Cart, {}),
            },
            {
                path: '/order/:orderId/success',
                element: _jsx(Success, {}),
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
