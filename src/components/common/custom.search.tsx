import { Theme } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

interface PlaceholderSearchIfc {
  onChangePlc?: (asset: string | null) => void;
  plcTxt: string;
  width?: string;
  height?: string;
}

function CustomSearch(props: PlaceholderSearchIfc) {
  const classes = useStyles({ ...props });
  const { plcTxt } = props;

  return (
    // <Autocomplete
    //   className={classes.placeholder}
    //   selectOnFocus
    //   clearOnBlur
    //   // handleHomeEndKeys
    //   id="free-solo-with-text-demo"
    //   //   onChange={(event, value) => onChangePlc(value)}
    //   // options={options}
    //   getOptionLabel={(option) => {
    //     // Value selected with enter, right from the input
    //     if (typeof option === 'string') {
    //       return option;
    //     }
    //     return option;
    //   }}
    //   freeSolo
    //   renderInput={(params) => (
        <TextField
          className={classes.placeholder}
          // {...params}
          placeholder={plcTxt}
        />
      // )}
    // />
  );
}

const useStyles = makeStyles<Theme, PlaceholderSearchIfc>((theme: Theme) => ({
  placeholder: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#343739',
      width: '15vw',
      height: '4vh',
      padding: '0px 0px 0px 1vw',
      color: theme.palette.common.white,
      letterSpacing: '-0.26px',
      fontSize: '1.5vh',
      border: 'solid 0.8px #343739',
    },
    '&.MuiAutocomplete-listbox': {
      fontSize: '8px',
    },
  },
  imageRoot: {
    margin: `0px 8px 0px 0px`,
  },
}));

export default CustomSearch;
