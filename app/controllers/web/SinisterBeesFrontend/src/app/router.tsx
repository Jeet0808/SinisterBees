import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { paths } from '../config/path';
import NotFound from './not-found';

function AppRouter() {
  // const CreateRouterAuto = () =>{

  // }

  const Router = createBrowserRouter(
    [
      {
        path: paths.home.path,
        element: <paths.home.component />,
      },
      {
        path: paths.app.dashboard.path,
        element: <paths.app.dashboard.component />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
    { basename: '/web' },
  );

  return <RouterProvider router={Router} />;
}

export default AppRouter;
