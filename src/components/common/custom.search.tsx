import { Theme } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { SearchTxtClr } from "../../constants/colors";
import { BlockNumbers } from "../../types";

interface PlaceholderSearchIfc {
  onChangePlc?: (asset: string | null) => void;
}

function CustomSearch(props: PlaceholderSearchIfc) {
  const options = BlockNumbers;
  const classes = useStyles();

  return (
    <Autocomplete
      className={classes.placeholder}
      selectOnFocus
      clearOnBlur
      // handleHomeEndKeys
      id="free-solo-with-text-demo"
      //   onChange={(event, value) => onChangePlc(value)}
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        return option;
      }}
      freeSolo
      renderInput={(params) => (
        <TextField
          className={classes.placeholder}
          {...params}
          placeholder="🔍   Search by TxHash/Bloclk"
        />
      )}
    />
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  placeholder: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "rgba(93, 93, 93, 0.1)",
      width: "15vw",
      height: "5vh",
      padding: "0px 0px 0px 1vw",
      color: SearchTxtClr,
      letterSpacing: "-0.26px",
      fontSize: "1.65vh",
      border: 'solid 0.8px #343739',
    },
    "&.MuiAutocomplete-listbox": {
      fontSize: "8px",
    },
  },
  imageRoot: {
    margin: `0px 8px 0px 0px`,
  },
}));

export default CustomSearch;
