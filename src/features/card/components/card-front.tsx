import React from "react";
import { Card, CardContent, IconButton } from "@mui/material";

interface CardFrontProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  onFlip: () => void;
}

export const CardFront: React.FC<CardFrontProps> = ({ children, onFlip, icon }) => {
  return (
    <Card className="relative w-64 h-80">
      <IconButton
        onClick={onFlip}
        style={{ position: "absolute", bottom: "2px", right: "2px" }}
      >
        {icon}
      </IconButton>
      <CardContent className="h-full">{children}</CardContent>
    </Card>
  );
};
