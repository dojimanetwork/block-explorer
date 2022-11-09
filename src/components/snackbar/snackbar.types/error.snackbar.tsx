import { memo } from "react";
import CustomSnackBar, {
  CustomSnackBarProps,
} from "../../common/custom.snackbar";

function ErrorSnackbar(props: CustomSnackBarProps) {
  const {
    horizontal,
    vertical,
    message,
    open,
    autoHideDuration,
    keyId,
    onClose,
  } = props;

  return (
    <CustomSnackBar
      horizontal={horizontal ?? "left"}
      vertical={vertical ?? "bottom"}
      message={message}
      open={open}
      autoHideDuration={autoHideDuration ?? 2000}
      onClose={onClose}
      keyId={keyId}
      severity="error"
      variant="filled"
    />
  );
}

export default memo(ErrorSnackbar);
