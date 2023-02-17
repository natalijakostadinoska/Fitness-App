import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('landing');
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};
