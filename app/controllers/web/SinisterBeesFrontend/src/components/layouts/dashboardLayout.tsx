import Button from '../ui/Button/button';
import { useNotifications } from '../ui/Notifications/notification-store';

export const DashboardLayput = () => {
  return (
    <div className='relative'>
      <div>Navbar</div>
      <div>
        <Button onClick={() => {useNotifications.getState().addNotification({
      type: 'error',
      title: 'Error',
      message:"message"}
        )
        }
    }>nmae</Button>
      </div>
      <div>Footer</div>
    </div>
  );
};
