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
          '& .MuiOutlinedInput-root': {
            width: '250px',
            borderRadius: '10px',
            '& fieldset': {
              borderColor: '#9273c1',
            },
            '&:hover fieldset': {
              borderColor: '#b085f1',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#b085f1',
            },
          },
        }}
      />
    </form>
  );
};

export default SearchBar;
