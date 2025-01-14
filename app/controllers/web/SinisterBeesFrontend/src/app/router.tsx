import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { paths } from '../config/path';

function AppRouter() {
  // const CreateRouterAuto = () =>{

  // }

  const Router = createBrowserRouter([
    {
      path: paths.home.path,
      element: <paths.home.component />,
    },
    {
      path: paths.app.dashboard.path,
      element: <paths.app.dashboard.component />,
    },
  ]);

  return <RouterProvider router={Router} />;
}

export default AppRouter;
