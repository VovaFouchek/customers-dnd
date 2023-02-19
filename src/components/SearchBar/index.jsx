import { TextField } from '@mui/material';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <form>
      <TextField
        id="search-bar"
        onChange={onChange}
        value={value}
        variant="outlined"
        placeholder={placeholder}
        size="small"
        sx={{
          '& input': {
            color: '#fff',
          },
        }}
      />
    </form>
  );
};

export default SearchBar;
