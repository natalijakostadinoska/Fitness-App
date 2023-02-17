import { AuthProvider } from './context/authContext';
import { LayoutStateProvider } from './context/layoutContext';
import { Layout } from './layout/Layout';
import { PageRoutes } from './Routes';

export const App = () => {
  return (
    <AuthProvider>
      <LayoutStateProvider>
        <Layout>
          <PageRoutes />
        </Layout>
      </LayoutStateProvider>
    </AuthProvider>
  );
};
