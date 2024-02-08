import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#216b39' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mon Application
                </Typography>
                <Button color="inherit">Accueil</Button>
                <Button color="inherit">À Propos</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit">Profil</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;