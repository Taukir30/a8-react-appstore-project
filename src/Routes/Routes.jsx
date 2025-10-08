import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <div className='text-center w-10 mx-auto'><span className="loading loading-bars loading-xl"></span></div>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/app/:id",
                Component: Details
            }
        ]
    }
])