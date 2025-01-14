import { useNavigate } from 'react-router-dom';
import { paths } from '../config/path'; 
import Button from '../components/ui/Button/button';

const NotFound = () => {
  const navigate = useNavigate();

  const extractRoutes = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    routes: any,
    parentPath = '',
  ): { label: string; href: string }[] => {
    const extractedRoutes: { label: string; href: string }[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.entries(routes).forEach(([key, value]: [string, any]) => {
      if (value.path) {
        const fullPath = `${parentPath}${value.path}`;
        extractedRoutes.push({ label: key, href: fullPath });
      }
      if (typeof value === 'object' && !value.path) {
        extractedRoutes.push(...extractRoutes(value, parentPath));
      }
    });
    return extractedRoutes;
  };

  const availableRoutes = extractRoutes(paths);

  return (
    <div>
      <h1>Available Routes:</h1>
      <div>
        {availableRoutes.map((route, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <Button onClick={() => navigate(route.href)}>{route.label}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
