import { useState } from 'react';

import PropTypes from 'prop-types';

import { SearchBar } from 'components';

import DragAndDrop from '../DragAndDrop';

const PopUpContent = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (event) => setSearchQuery(event.target.value);

  return (
    <>
      <SearchBar
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search available columns..."
      />
      <DragAndDrop onClose={onClose} searchQuery={searchQuery} />
    </>
  );
};

export default PopUpContent;

PopUpContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};
