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
    {},
  ]);

  return <RouterProvider router={Router} />;
}

export default AppRouter;
