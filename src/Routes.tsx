import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import { Activity } from './pages/Activity';
import { Programmes } from './pages/Programmes';
import { HomeLanding } from './pages/home/HomeLanding';
import { Contacts } from './pages/home/Contacts';
import { History } from './pages/Activity/History';
import { Achievement } from './pages/Activity/Achievement';

export const START_PAGE = '/home';
export const LOGIN_PAGE = '/login';

export const NO_NAVIGATION = ['/', '/login', '/register'];

const BaseRoutes = {
  Landing: '/',
  Register: '/register',
  Login: '/login',
  Home: '/home',
  Workout: '/workouts',
  Activity: '/activity',
  Programmes: '/programmes',
} as const;

const NestedRoutes = {
  Landing: 'landing',
  Contacts: 'contacts',
  History: 'history',
  Achievement: 'achievement',
} as const;

type RouteType = typeof BaseRoutes;
type RouteKey = keyof RouteType;
type RouteValues = RouteType[RouteKey];
type NestedRouteType = typeof NestedRoutes;
type NestedRouteKey = keyof NestedRouteType;
type NestedRouteValues = NestedRouteType[NestedRouteKey];

export type RouteNames = RouteValues | NestedRouteValues;

const routes: Record<RouteValues, JSX.Element> = {
  [BaseRoutes.Landing]: <Landing />,
  [BaseRoutes.Register]: <Register />,
  [BaseRoutes.Login]: <Login />,
  [BaseRoutes.Home]: <Home />,
  [BaseRoutes.Workout]: <Workouts />,
  [BaseRoutes.Activity]: <Activity />,
  [BaseRoutes.Programmes]: <Programmes />,
};

const nestedRoutes: Partial<
  Record<RouteValues, Partial<Record<NestedRouteValues, JSX.Element>>>
> = {
  [BaseRoutes.Home]: {
    landing: <HomeLanding />,
    contacts: <Contacts />,
  },
  [BaseRoutes.Activity]: {
    history: <History />,
    achievement: <Achievement />,
  },
};

export const PageRoutes = () => {
  return (
    <>
      <Routes>{generateRoutes(routes)}</Routes>
    </>
  );
};

export const getTypedObjectKeys = <T extends object>(object: T) =>
  Object.keys(object) as (keyof T)[];

export const getTypedObjectEntries = <T extends object>(object: T) =>
  Object.entries(object) as [keyof T, T[keyof T]][];

const generateRoutes = (routes: Record<RouteValues, JSX.Element>) =>
  getTypedObjectEntries(routes).map(([key, value]) => (
    <Route path={key} element={value} key={key}>
      {generateNestedRoutes(nestedRoutes[key])}
    </Route>
  ));

const generateNestedRoutes = (
  routes: Partial<Record<NestedRouteValues, JSX.Element>> | undefined,
) =>
  routes &&
  getTypedObjectEntries(routes).map(([key, value]) => (
    <Route path={key} element={value} key={key} />
  ));
