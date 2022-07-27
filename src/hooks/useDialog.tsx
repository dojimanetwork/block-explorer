import React, { useState } from 'react';

export default function useDialog(): [
  open: boolean,
  handleClose: () => void,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
] {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return [open, handleToggle, setOpen];
}
