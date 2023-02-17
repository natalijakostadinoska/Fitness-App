import { PropsWithChildren, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { Icon, IconName } from '../components/Icon';
import { RouteNames } from '../Routes';

type NavigationProps = {
  back?: ReactNode;
  logout?: ReactNode;
};

export const Navigation = ({ back, logout }: NavigationProps) => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="md:top-0 bottom-0 w-full px-2 py-3 md:p-0">
        <div className="flex w-full justify-around items-center bg-slate-200 shadow-lg drop-shadow-lg border-0 rounded-3xl md:rounded-none px-2 py-2">
          {back}
          <NavigationLink path={pathname} link="/home" icon="home">
            Home
          </NavigationLink>
          <NavigationLink path={pathname} link="/workouts" icon="weight">
            Workouts
          </NavigationLink>
          <NavigationLink path={pathname} link="/activity" icon="activity">
            Activity
          </NavigationLink>
          <NavigationLink path={pathname} link="/programmes" icon="edit">
            Programmes
          </NavigationLink>
          {logout}
        </div>
      </div>
    </>
  );
};

type NavigationLinkProps = {
  path: string;
  link: RouteNames;
  icon: IconName;
};

const NavigationLink = ({
  path,
  icon,
  link,
  children,
}: PropsWithChildren<NavigationLinkProps>) => {
  const isPath = path.startsWith(link);

  return (
    <Button
      link={link}
      disabled={isPath}
      className={`bg-transparent ${
        isPath ? 'text-blue-600' : 'text-black'
      } border-0 text-xs flex flex-col md:flex-row md:gap-2 justify-center items-center px-0 py-0`}
    >
      <Icon
        className="h-8 w-8"
        color={isPath ? 'stroke-blue-600' : undefined}
        name={icon}
      />
      <span>{children}</span>
    </Button>
  );
};
