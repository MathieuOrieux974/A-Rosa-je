import { useSnackbarStore } from '@stores/SnackbarStore';

/**
 * Method used to handle HTTP error
 * and display alert snackbar error to give some context on what happened to the user
 * @param error HTTP error received
 * @param showError Method used to display an alert (error level) in a snackbar
 */
const handleErrors = (error) => {
  const { showError } = useSnackbarStore.getState();
  if (!error.response) {
    showError({ message: "Il n'a pas eu de réponse de la pars du serveur", duration: 'normal' });
  } else if (error.response.status === 401) {
    showError({ message: "Vous n'êtes pas autorisé", duration: 'normal' });
  } else if (error.response.data) {
    // Show a specific message if exists in traduction file, else generic one
    const message = 'Nous avons rencontré une erreur. Contacter un administrateur';
    showError({ message, duration: 'normal' });
  } else {
    console.error(error);
  }
};

export default handleErrors;
