import { useEffect } from 'react';
import Button from '../ui/Button/button';
import { useNotifications } from '../ui/Notifications/notification-store';
import { HttpHandler } from '../../lib/HttpRequestHandler';

export const DashboardLayput = () => {

  useEffect(()=>{
    async function nmae() {
      const res =  await HttpHandler.get("/name")
      console.log(res);
    }
    nmae();
  })

  return (
    <div className="relative">
      <div>Navbar</div>
      <div>
        <Button
          onClick={() => {
            useNotifications.getState().addNotification({
              type: 'error',
              title: 'Error',
              message: 'message',
            });
          }}
        >
          nmae
        </Button>
      </div>
      <div>Footer</div>
    </div>
  );
};
