import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Badge } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, Notifications } from '@mui/icons-material';

const Header = () => {
    // État pour la gestion du menu déroulant
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#216b39' }}>
            <Toolbar>
                {/* Logo */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img src="./arosaje.png" alt="Logo" style={{ height: '50px', marginRight: '5px' }} />
                    Bienvenue sur A-Rosa-je !
                </Typography>
                {/* Menu déroulant */}
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Accueil</MenuItem>
                    <MenuItem onClick={handleClose}>À Propos</MenuItem>
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                    <MenuItem onClick={handleClose}>Profil</MenuItem>
                </Menu>
                {/* Boutons de connexion/inscription */}
                <Button color="inherit">Se Connecter</Button>
                <Button color="inherit">S'Inscrire</Button>
                {/* Notification ou badge */}
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
                {/* Menu du compte utilisateur */}
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                >
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
