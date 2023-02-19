/* eslint-disable react/prop-types */
import { Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';

import MainButton from 'components/MainButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '880px',
  maxHeight: '650px',
  height: '100%',
  width: '100%',
  bgcolor: '#2d2936d9',
  backdropFilter: 'blur(10px)',
  border: 'none',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const PopUp = ({ titleBtn = 'Open', onOpen, onClose, open, children }) => {
  return (
    <div>
      <MainButton onClick={onOpen}>{titleBtn}</MainButton>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default PopUp;

PopUp.propTypes = {
  titleBtn: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
