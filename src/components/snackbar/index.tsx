import SuccessSnackBar from "./snackbar.types/success.snackbar";
import ErrorSnackBar from "./snackbar.types/error.snackbar";
import InfoSnackBar from "./snackbar.types/info.snackbar";
import WarningSnackBar from "./snackbar.types/warning.snackbar";
import { nanoid } from "nanoid";
import useSnackbar from "../../hooks/useSnackBar";

function AllSnackbar() {
  const {
    error,
    handleError,
    handleInfo,
    handleSuccess,
    handleWarning,
    success,
    warning,
    message,
    info,
  } = useSnackbar();

  return (
    <>
      <SuccessSnackBar
        keyId={nanoid()}
        message={message}
        open={success}
        onClose={handleSuccess}
      />
      <ErrorSnackBar
        keyId={nanoid()}
        message={message}
        open={error}
        onClose={handleError}
      />
      <WarningSnackBar
        keyId={nanoid()}
        message={message}
        open={warning}
        onClose={handleWarning}
      />
      <InfoSnackBar
        keyId={nanoid()}
        message={message}
        open={info}
        onClose={handleInfo}
      />
    </>
  );
}

export default AllSnackbar;
