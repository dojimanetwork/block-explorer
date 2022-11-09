import React, { createContext, useState } from "react";
import { SnackbarTypes } from "../types";

type EmptyParam = () => void;

export interface SnackbarContextIfc {
  success: boolean;
  handleSuccess: EmptyParam;
  error: boolean;
  handleError: EmptyParam;
  warning: boolean;
  handleWarning: EmptyParam;
  info: boolean;
  handleInfo: EmptyParam;
  message: string | undefined;
  DisplayMessage: (msg: string, type: SnackbarTypes) => void;
  isLoading: boolean;
  toggleLoading: EmptyParam;
}

export const SnackbarContext = createContext<SnackbarContextIfc>({
  success: false,
  error: false,
  warning: false,
  info: false,
  message: undefined,
  handleSuccess: () => {},
  handleError: () => {},
  handleWarning: () => {},
  handleInfo: () => {},
  DisplayMessage: () => {},
  isLoading: false,
  toggleLoading: () => {},
});

function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [info, setInfo] = useState<boolean>(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSuccess = () => setSuccess((prev) => !prev);
  const handleError = () => setError((prev) => !prev);
  const handleWarning = () => setWarning((prev) => !prev);
  const handleInfo = () => setInfo((prev) => !prev);
  const handleMessage = (msg: string) => setMessage(msg);
  const toggleLoading = () => setLoading((prev) => !prev);

  const DisplayMessage = (msg: string, type: SnackbarTypes) => {
    handleMessage(msg);
    switch (type) {
      case "success":
        return handleSuccess();
      case "error":
        return handleError();
      case "info":
        return handleInfo();
      case "warning":
        return handleWarning();
      default:
        return handleError();
    }
  };

  return (
    <SnackbarContext.Provider
      value={{
        success,
        error,
        warning,
        info,
        message,
        handleSuccess,
        handleError,
        handleInfo,
        handleWarning,
        DisplayMessage,
        isLoading,
        toggleLoading,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}
export default SnackbarProvider;
