import SignInForm from '@components/auth/SignInForm/SignInForm';
import SignUpForm from '@components/auth/SignUpForm/SignUpForm';
import {Stack, Tab, Tabs, Typography} from '@mui/material';
import {useState} from 'react';
import styles from './Auth.module.scss';

export default function Auth() {
  const [tab, setTab] = useState('sign-in');

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.divAuth}>
        <Stack direction="column" gap={4} className={styles.authForm}>
          <Tabs value={tab} onChange={handleTabChange}>
            <Tab label="connection" value="sign-in"/>
            <Tab label="inscription" value="sign-up"/>
          </Tabs>
          {tab === 'sign-in' && <SignInForm/>}
          {tab === 'sign-up' && <SignUpForm/>}
        </Stack>
      </div>
    </div>
  )
    ;
}
