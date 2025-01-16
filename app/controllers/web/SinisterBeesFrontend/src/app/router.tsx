import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { paths } from '../config/path';
import NotFound from './not-found';
import LoginButtons from '../pages/pagesComp/logincomp/LoginButtons';

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
    {
      path: paths.auth.login.path,
      element: <paths.auth.login.component />,
    },
    {
      path: paths.auth.register.path,
      element: <paths.auth.register.component />,
    },
    {
      path: paths.auth.logout.path,
      element: <paths.auth.logout.component />,
    },
    {
      path: paths.auth.resetPassword.path,
      element: <paths.auth.resetPassword.component />,
    },
    {
      path: paths.auth.forgetPassword.path,
      element: <paths.auth.forgetPassword.component />,
    },
    {
      path: '/web/btn',
      element: <LoginButtons />,
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
