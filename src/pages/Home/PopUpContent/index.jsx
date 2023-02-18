import PropTypes from 'prop-types';

import { SearchBar } from 'components';

import DragAndDrop from '../DragAndDrop';

const PopUpContent = ({ handleClosePopUp }) => {
  return (
    <>
      <SearchBar placeholder="Search available columns..." />
      <DragAndDrop handleClosePopUp={handleClosePopUp} />
    </>
  );
};

export default PopUpContent;

PopUpContent.propTypes = {
  handleClosePopUp: PropTypes.func.isRequired,
};
