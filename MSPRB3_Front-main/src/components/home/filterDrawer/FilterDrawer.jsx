import { Drawer, Typography } from '@mui/material';
import PropTypes from 'prop-types';

FilterDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

export default function FilterDrawer({ isOpen, closeDrawer }) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={closeDrawer}>
      <Typography variant="body1">Les filtres OMG</Typography>
    </Drawer>
  );
}
