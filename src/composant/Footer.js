import React from 'react';
import { Typography, Container, CssBaseline, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, KeyboardArrowUp } from '@mui/icons-material';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer style={{ marginTop: 'auto', backgroundColor: '#f8f8f8', padding: '20px' }}>
            <Container maxWidth="sm">
                {/* Conteneur pour aligner le texte et le lien sur la même ligne */}
                <Box display="flex" justifyContent="center" alignItems="center">
                    {/* Texte copyright */}
                    <Typography variant="body2" color="textSecondary">
                        © 2024 Mon Application
                    </Typography>
                    {/* Lien vers la politique de cookies */}
                    <Typography variant="body2" color="textSecondary" align="center" style={{ marginLeft: '10px' }}>
                        <a href="/politique-cookies">Politique de cookies</a>
                    </Typography>
                </Box>
                {/* Réseaux sociaux et informations de contact alignés sur la même ligne */}
                <Box display="flex" justifyContent="center" alignItems="center" marginTop="10px">
                    {/* Liens vers les réseaux sociaux */}
                    <IconButton aria-label="Facebook" color="primary">
                        <Facebook />
                    </IconButton>
                    <IconButton aria-label="Twitter" color="primary">
                        <Twitter />
                    </IconButton>
                    <IconButton aria-label="Instagram" color="primary">
                        <Instagram />
                    </IconButton>
                    <IconButton aria-label="LinkedIn" color="primary">
                        <LinkedIn />
                    </IconButton>
                    {/* Informations de contact */}
                    <Typography variant="body2" color="textSecondary" align="center">
                        | Contactez-nous : support@ARosaje.com | 02.54.99.66.33 |
                    </Typography>
                </Box>
                {/* Bouton pour revenir en haut de la page */}
                <Box display="flex" justifyContent="center" marginTop="10px">
                    <IconButton onClick={scrollToTop} aria-label="Revenir en haut de la page">
                        <KeyboardArrowUp />
                    </IconButton>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;
