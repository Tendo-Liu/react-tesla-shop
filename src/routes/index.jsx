import React, { lazy, Suspense } from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { Redirect } from 'react-router-dom';

// 一级路由级别组件
const Tesla = lazy(() => import('../pages/Tesla'));
const Find = lazy(() => import('../pages/Find'));
const TesMap = lazy(() => import('../pages/TesMap'));
const Shop = lazy(() => import('../pages/Shop'));

// 二级路由级别组件
const Model = lazy(() => import('../pages/TeslaInfo/Model'))
const Order = lazy(() => import('../pages/TeslaInfo/Order'))
const TeslaZone = lazy(() => import('../pages/ShopInfo/TeslaZone'))
const TeslaShop = lazy(() => import('../pages/ShopInfo/TeslaShop'))
const News = lazy(() => import('../pages/FindInfo/News'))

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
            path: "/find",
            component: SuspenseComponent(Find),
            routes: [
                {
                    path: '/find/:id',
                    component: SuspenseComponent(News)
                }
            ]
        },
        {
            path: "/tesla",
            component: SuspenseComponent(Tesla),
            routes: [
                {
                    // path: '/tesla/:id' 写这个会匹配进去
                    path: '/tesla/car/:id',
                    component: SuspenseComponent(Model)
                },
                {
                    path: '/tesla/order',
                    component: SuspenseComponent(Order)
                }
            ]
        },
        {
            path: "/tesMap",
            component: SuspenseComponent(TesMap)
        },
        {
            path: "/shop",
            component: SuspenseComponent(Shop),
            routes: [
                {
                    path: '/shop/teslaShop',
                    component: SuspenseComponent(TeslaShop)
                },
                {
                    path: '/shop/teslaZone/:id',
                    component: SuspenseComponent(TeslaZone)
                }
            ]
        }
    ]
}]

