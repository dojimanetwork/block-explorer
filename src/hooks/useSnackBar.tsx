import { useContext } from "react";
import { SnackbarContext } from "../providers/snackbar.provider";

function useSnackbar() {
  const context = useContext(SnackbarContext);
  return {
    ...context,
  };
}

export default useSnackbar;
