import { Alert, AlertTitle } from '@mui/material';
import PropTypes from 'prop-types';

const ErrorMessage = ({ descrition = 'missing' }) => {
  const styledAlert = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: '#ffb8b8',
  };

  return (
    <Alert severity="error" sx={styledAlert}>
      <AlertTitle>Error</AlertTitle>
      Details: <strong>{descrition}</strong>
    </Alert>
  );
};

ErrorMessage.propTypes = {
  descrition: PropTypes.string.isRequired,
};

export default ErrorMessage;
