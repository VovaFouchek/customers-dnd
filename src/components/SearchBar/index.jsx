import { TextField } from '@mui/material';

// todo need to add
// eslint-disable-next-line react/prop-types
const SearchBar = ({ setSearchQuery, placeholder }) => {
  return (
    <form>
      <TextField
        id="search-bar"
        onInput={(event) => {
          setSearchQuery(event.target.value);
        }}
        variant="outlined"
        placeholder={placeholder}
        size="small"
        sx={{ color: 'red' }}
      />
    </form>
  );
};

export default SearchBar;
