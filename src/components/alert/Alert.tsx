import { Alert } from '@mui/material';
import { useState } from 'react';
import { StyledAlert } from './Alert.styled';

export const CustomAlert: React.FC<{
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
}> = ({ message, severity }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <StyledAlert>
          <Alert severity={severity} onClose={handleClose}>
            {message}
          </Alert>
        </StyledAlert>
      )}
    </>
  );
};
