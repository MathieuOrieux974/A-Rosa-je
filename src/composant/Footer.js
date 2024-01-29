import React from 'react';
import { Typography, Container, CssBaseline } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', backgroundColor: '#f8f8f8', padding: '20px' }}>
            <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary" align="center">
                    © 2024 Mon Application
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;