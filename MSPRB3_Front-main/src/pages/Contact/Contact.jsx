import {useState} from 'react';
import {Typography, TextField, Button, Snackbar, Grid} from '@mui/material';
import {useSnackbarStore} from '@stores/SnackbarStore';
import styles from './Contact.module.scss';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const {showSuccess, showError} = useSnackbarStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer l'e-mail à l'équipe technique
    // Par exemple, en utilisant un service back-end ou une API d'envoi d'e-mails
    // Ici, nous allons simplement afficher un message de succès ou d'erreur en fonction du contenu du formulaire
    if (email && message) {
      // Simulation de l'envoi d'e-mail réussi
      showSuccess({message: "Votre message a été envoyé avec succès !"});
      // Réinitialisation des champs de formulaire après l'envoi
      setEmail('');
      setMessage('');
    } else {
      // Afficher une erreur si l'un des champs est vide
      showError({message: "Veuillez remplir tous les champs du formulaire."});
    }
    // Ouvrir la Snackbar pour afficher le message de succès ou d'erreur
    setIsSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <Grid container direction={"column"}>
      <Grid item xs={8} md={8} gap={2}>
        <Typography variant="h2">Contactez-nous</Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Votre adresse e-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            className={styles.input}
          />
          <TextField
            label="Votre message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            required
            className={styles.input}
          />
          <Button type="submit" variant="contained" color="primary" className={styles.button}>
            Envoyer
          </Button>
        </form>
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Message envoyé avec succès !"
        />
      </Grid>
    </Grid>
  );
}
