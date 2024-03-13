import { Button, FormControl, Grid, Stack, TextField, Typography } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';

ArticleForm.propTypes = {
  afterValidation: PropTypes.func,
  afterCancel: PropTypes.func,
  defaultArticle: PropTypes.object
};

export default function ArticleForm({ afterValidation, afterCancel, defaultArticle }) {
  const { showSuccess } = useSnackbarStore();
  const { handleSubmit, reset, control, getValues } = useForm({ defaultValues: defaultArticle });

  const handleArticleSave = () => {
    const article = getValues();
    console.log('🚀 ~ handleArticleSave ~ article:', article);
    showSuccess({ message: 'Article créer avec succès' });
    afterValidation();
  };

  const handleCancel = () => {
    reset();
    afterCancel();
  };

  return (
    <Grid container direction="column" gap={3} justifyContent="center">
      <Typography variant="h4">{defaultArticle ? `Modifier ${defaultArticle.title}` : 'Créer une Annonce'}</Typography>
      <FormControl fullWidth variant="outlined">
        <Stack direction="column" gap={2}>
          <Controller
            name="title"
            control={control}
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField
                {...fieldState}
                label="Titre de l'annonce"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField
                {...fieldState}
                label="Description de l'annonce"
                multiline
                rows={4}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Stack>
      </FormControl>

      <Stack direction="row" gap={2} justifyContent="center">
        <Button variant="outlined" onClick={handleCancel}>
          Annuler
        </Button>
        <Button variant="contained" onClick={handleSubmit(handleArticleSave)}>
          {defaultArticle ? 'Modifier' : 'Créer'}
        </Button>
      </Stack>
    </Grid>
  );
}
