import React, { lazy, type FC } from 'react';
import { Loadable } from '../../shared/ui/loadable';
import AppLayout from '../../widgets/layouts';

import { Navigate, useRoutes } from 'react-router-dom';
import { PATH_PAGE } from '../../shared/lib/react-router/';
const Root = Loadable(lazy(() => import('../../pages/root')));
const Page404 = Loadable(lazy(() => import('../../pages/page-404')));


export const Router: FC = () => {
    return useRoutes([
        {
            element: (
                <AppLayout />
            ),
            children: [
                {
                    path: PATH_PAGE.root,
                    element: <Root />,
                },
            ]
        },
        { path: PATH_PAGE.page404, element: <Page404 /> },
        { path: '*', element: <Navigate to={PATH_PAGE.root} replace /> },
    ]);
}