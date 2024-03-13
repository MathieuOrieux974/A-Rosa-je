import { AlertSnackbar } from '@components/global/AlertSnackbar/AlertSnackbar';
import { ReactQueryProvider } from '@contexts/ReactQueryProvider';
import { ThemeProvider } from '@emotion/react';
import AuthProvider from '@hooks/contexts/useAuth';
import { CssBaseline } from '@mui/material';
import { router } from '@routes/AppRoutes';
import { theme } from '@styles/theme';
import { RouterProvider } from 'react-router-dom';

/**
 * Component used to handle the application
 */
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline>
          <ReactQueryProvider>
            <AppRouter />
            <AlertSnackbar />
          </ReactQueryProvider>
        </CssBaseline>
      </AuthProvider>
    </ThemeProvider>
  );
}

/**
 * Router provider for the application
 * @returns router provider
 */
function AppRouter() {
  return <RouterProvider router={router()} />;
}
