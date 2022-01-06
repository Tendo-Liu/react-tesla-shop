import React, { lazy, Suspense } from 'react';
import BlankLayout from '../layouts/BlankLayout';
import { Redirect, Link } from 'react-router-dom';
const Main = lazy(()=> import('../pages/Main/Main'));
import Tabbuttom from '../components/tabbuttom/Tabbuttom';

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes:[
        {
            path:'/',
            exact: true,
            render: () => < Redirect to = { "/home" }/>,
        },
        {
            path:'/home',
            component: Tabbuttom,
            routes: [
                {
                    path: '/home',
                    exact: true,
                    render: () => < Redirect to = { "/home/main" }
                    />,
                },
                {
                    path: '/home/main',
                    component: SuspenseComponent(Main),
                }
            ]
        }
    ]
}]

