import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useLoaderData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import withSuspense from './utils/SuspenderFunctions';

const Dashboard = () => {
  const data = useLoaderData();
  const navigation = useNavigation  ();
  console.log("Dashboard rendered with data:", data); // Log data
    
  // Check if the route is in a loading state
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      {isLoading ? (
        <p>Loading dashboard...</p>
      ) : (
        <div>dashboard - {data?.data}</div>
      )}
    </div>
  );
};

const dashboardLoader = async () => {
  console.log("dashboardLoader called");
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("dashboardLoader resolved");
      resolve({ data: "Dashboard Data" });
    }, 5000)
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: (
          <Dashboard />
      ),
      loader: dashboardLoader,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;