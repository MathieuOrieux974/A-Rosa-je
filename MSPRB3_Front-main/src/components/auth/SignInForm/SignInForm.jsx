import { useAuth } from '@hooks/contexts/useAuth';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { showSuccess, showError } = useSnackbarStore();
  const { handleSubmit, reset, control } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitLogin = ({ email, password }) => {
    if (email === 'user@mail.com' && password === 'user') {
      login({ firstName: 'user', lastName: 'casual', mail: 'user@mail.com', isBotanist: false });
      showSuccess({ message: 'Connecter avec sucées' });
      navigate('/');
    } else if (email === 'botanist@mail.com' && password === 'botanist') {
      login({ firstName: 'user', lastName: 'botanist', mail: 'user@mail.com', isBotanist: true });
      showSuccess({ message: 'Connecter avec sucées' });
      navigate('/');
    } else {
      showError({ message: 'Identification invalide' });
    }
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
                type={showPassword ? 'text' : 'password'}
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
