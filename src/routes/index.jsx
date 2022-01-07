import React, { lazy, Suspense } from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { Redirect } from 'react-router-dom';

// 路由级别组件
const Tesla = lazy(() => import('../pages/Tesla'));
const Find = lazy(() => import('../pages/Find'));
const TesMap = lazy(() => import('../pages/TesMap'));
const Activity = lazy(() => import('../pages/Activity'));

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    path: "/",
    component: HomeLayout,
    routes: [
        {
            path: '/',
            exact: true,
            render: () => < Redirect to={"/tesla"} />,
        },
        {
            path: "/tesla",
            component: SuspenseComponent(Tesla)
        },
        {
            path: "/find",
            component: SuspenseComponent(Find)
        },
        {
            path: "/tesMap",
            component: SuspenseComponent(TesMap)
        },
        {
            path: "/activity",
            component: SuspenseComponent(Activity)
        }
    ]
}]

