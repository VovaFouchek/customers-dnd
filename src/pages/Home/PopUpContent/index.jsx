import PropTypes from 'prop-types';

import DragAndDrop from '../DragAndDrop';

const PopUpContent = ({ handleClosePopUp }) => {
  // const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {/* <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search available columns..."
      /> */}
      <DragAndDrop
        handleClosePopUp={handleClosePopUp}
        // searchQuery={searchQuery}
      />
    </>
  );
};

export default PopUpContent;

PopUpContent.propTypes = {
  handleClosePopUp: PropTypes.func.isRequired,
};
