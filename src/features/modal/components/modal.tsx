import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, icon }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          style={{
            position: "absolute",
            top: "8px",
            right: "20px",
          }}
        >
          {icon}
        </IconButton>
        Episodes where it appears
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};
