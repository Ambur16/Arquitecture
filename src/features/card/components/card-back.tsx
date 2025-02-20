import React from "react";
import { Card, CardContent, IconButton } from "@mui/material";
import { MoreDetailsButton } from "~/features/details";

interface CardBackProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  episodes: string[];
  onFlip: () => void;
}

export const CardBack: React.FC<CardBackProps> = ({ children, onFlip, icon, episodes }) => {
  return (
    <>
      <Card className="relative w-64 h-80">
        <IconButton
          onClick={onFlip}
          style={{
            position: "absolute",
            bottom: "2px",
            right: "2px",
            zIndex: 10,
            transform: "scaleX(-1)",
          }}
        >
          {icon}
        </IconButton>
        
        <MoreDetailsButton episodes={episodes}/>
        <CardContent className="h-full flex items-center justify-center">
          <div style={{ transform: "scaleX(-1)" }}>{children}</div>
        </CardContent>
      </Card>
    </>
  );
};
