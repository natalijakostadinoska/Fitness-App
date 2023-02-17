import { PropsWithChildren, useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import { Navigation } from './Navigation';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTypedObjectKeys, NO_NAVIGATION, RouteNames } from '../Routes';
import { Header } from './Header';
import { Icon } from '../components/Icon';
import { Button, ButtonType } from '../components/Button';
import { useAuth } from '../context/authContext';
import { BackButtonProvider, useBack } from '../context/backButtonContext';
import { useLayout } from '../context/layoutContext';

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  const { pathname } = useLocation();
  const { color } = useLayout();

  const title: Partial<Record<RouteNames, string>> = {
    '/home': 'Home',
    '/workouts': 'Workouts',
    '/activity': 'Activity',
    '/programmes': 'Programmes',
  };

  const hideNavigation = useMemo(
    () => NO_NAVIGATION.includes(pathname),
    [pathname],
  );

  const shownTitle = useMemo(() => {
    if (
      !getTypedObjectKeys(title).some((routeName) =>
        pathname.startsWith(routeName),
      )
    ) {
      return '';
    }

    if (pathname.indexOf('/') === pathname.lastIndexOf('/')) {
      return title[pathname as RouteNames] ?? '';
    }

    const startingPath = pathname.slice(0, pathname.lastIndexOf('/'));

    return title[startingPath as RouteNames] ?? '';
  }, [pathname]);

  return (
    <>
      <BackButtonProvider>
        <div
          className={`h-full flex flex-col justify-between items-center ${color}`}
        >
          {!hideNavigation && (
            <Header
              className="md:order-1"
              textClassName="text-2xl"
              back={<BackButton className="md:hidden" />}
              logout={<LogoutButton className="md:hidden" />}
              title={shownTitle}
            />
          )}

          <div className="h-full w-full md:order-2 overflow-auto">
            {children}
          </div>

          {!hideNavigation && (
            <Navigation
              back={<BackButton className="hidden md:flex" />}
              logout={<LogoutButton className="hidden md:block" />}
            />
          )}
          <ToastContainer
            position="bottom-right"
            closeButton={false}
            theme="light"
          />
        </div>
      </BackButtonProvider>
    </>
  );
};

type BackButtonProps = {
  className?: string;
};

export const BackButton = ({ className }: BackButtonProps) => {
  const navigation = useNavigate();
  const { show } = useBack();

  return (
    <span className={`${!show && 'hidden'}`}>
      <Button
        onClick={() => navigation(-1)}
        className={`${className} pr-4 py-2`}
        type={ButtonType.Link}
      >
        <Icon name="back" className=" h-6 w-6 stroke-white fill-black" />
      </Button>
    </span>
  );
};

type LogoutButtonProps = {
  className?: string;
};

export const LogoutButton = ({ className }: LogoutButtonProps) => {
  const { logout } = useAuth();

  return (
    <div className={`${className}`}>
      <Button onClick={logout}>logout</Button>
    </div>
  );
};
