import { memo } from "react";
import CustomSnackBar, {
  CustomSnackBarProps,
} from "../../common/custom.snackbar";

function SuccessSnackbar(props: CustomSnackBarProps) {
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
      autoHideDuration={autoHideDuration ?? 3000}
      onClose={onClose}
      keyId={keyId}
      severity="success"
      variant="filled"
    />
  );
}

export default memo(SuccessSnackbar);
