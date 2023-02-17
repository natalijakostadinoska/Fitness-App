import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavigationHeader } from '../layout/NavigationHeader';

export const Activity = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('history');
  }, []);

  return (
    <>
      <div className="h-full w-full flex flex-col">
        <NavigationHeader
          headers={[
            {
              text: 'History',
              link: 'history',
            },
            {
              text: 'Achievement',
              link: 'achievement',
            },
          ]}
        />
        <Outlet />
      </div>
    </>
  );
};
