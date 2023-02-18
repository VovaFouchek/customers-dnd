/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from 'prop-types';

import StrictModeDroppable from 'pages/Home/StrictModeDroppable';

import { StyledColumn, StyledList, StyledTitle } from './style';
import Item from '../Item';

const Column = ({ col: { list, id, title } }) => {
  return (
    <StrictModeDroppable droppableId={id}>
      {(provided) => (
        <StyledColumn>
          <StyledTitle>{title}</StyledTitle>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {list?.map((text, index) => (
              <Item key={text} text={text} index={index} />
            ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </StrictModeDroppable>
  );
};

export default Column;

Column.propTypes = {
  col: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
