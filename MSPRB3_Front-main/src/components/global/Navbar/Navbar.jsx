import ArosajeLogoBGRounded from '@components/global/logo/ArosajeLogoBGRounded';
import { useAuth } from '@hooks/contexts/useAuth';
import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Menu, MenuItem, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const { isAuthenticated, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseMenu();
    navigate('/');
  };

  const handleLogin = () => {
    handleCloseMenu();
    navigate('/auth');
  };

  return (
    <AppBar className={styles.navbar} position="sticky">
      <Stack direction="row" gap={35} justifyContent="center" alignItems="center">
        <Link to="/" className={styles.arosajeLogo}>
          {!isSm && <Typography variant="h1">Arosa&apos;je</Typography>}
        </Link>
        {isAuthenticated() && (
          <Link to="/my-plants">
            <Typography variant="body1">Mes Plantes</Typography>
          </Link>
        )}
        <Link to="/articles">
          <Typography variant="body1">Annonces</Typography>
        </Link>
        <Link to="/contact">
          <Typography variant="body1">Contact</Typography>
        </Link>
        <div className={styles.userMenu}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu id="menu-appbar" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            {isAuthenticated() ? (
              <MenuItem onClick={handleLogout}>déconnecter</MenuItem>
            ) : (
              <MenuItem onClick={handleLogin}>se connecter</MenuItem>
            )}
          </Menu>
        </div>
      </Stack>
    </AppBar>
  );
}
