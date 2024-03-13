import { useAuth } from '@hooks/contexts/useAuth';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField
} from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.scss';

export default function SignUpForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { showSuccess } = useSnackbarStore();
  const { handleSubmit, reset, control } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitLogin = ({ firstName, lastName, email, isBotanist }) => {
    login({ firstName, lastName, email, isBotanist });
    showSuccess({ message: 'Compte créer avec sucées' });
    navigate('/');
  };

  return (
    <Stack direction="column" gap={3}>
      <FormControl fullWidth variant="outlined">
        <Stack direction="column" gap={2}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'adresse mail invalide'
              }
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField {...fieldState} label="Email" error={!!error} helperText={error ? error.message : null} />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: 'Requis'
            }}
            render={({ field: fieldState, fieldState: { error } }) => (
              <TextField
                {...fieldState}
                label="Mot de passe"
                error={!!error}
                helperText={error ? error.message : null}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((currentShow) => !currentShow)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
          <Controller
            name="isBotanist"
            control={control}
            defaultValue=""
            render={({ field: fieldState }) => (
              <FormControlLabel label="Sélectionnez si vous êtes un botaniste." control={<Checkbox {...fieldState} />} />
            )}
          />
        </Stack>
      </FormControl>

      <Stack direction="row" justifyContent="center">
        <Button variant="contained" onClick={handleSubmit(onSubmitLogin)}>
          Connecter
        </Button>
      </Stack>
    </Stack>
  );
}
