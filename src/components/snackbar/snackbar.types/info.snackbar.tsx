import { memo } from "react";
import CustomSnackBar, {
  CustomSnackBarProps,
} from "../../common/custom.snackbar";

function InfoSnackbar(props: CustomSnackBarProps) {
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
      autoHideDuration={autoHideDuration ?? 5000}
      onClose={onClose}
      keyId={keyId}
      severity="info"
      variant="filled"
    />
  );
}

export default memo(InfoSnackbar);
