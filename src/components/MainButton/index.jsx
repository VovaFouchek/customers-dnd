import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const MainButton = ({ onClick, children }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        display: 'inline-block',
        borderRadius: '10px',
        fontSize: '14px',
        textTransform: 'inherit',
        backgroundColor: '#c314ff',
        mb: 3,
        '&:hover': {
          backgroundColor: '#d559ff',
        },
      }}
    >
      {children}
    </Button>
  );
};
export default MainButton;

MainButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
