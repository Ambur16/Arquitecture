import React from "react";
import { Card } from "~/features/";
import { CharacterModel } from "~/entities/characters/models/";

interface CharacterCardProps {
  character: CharacterModel;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card character={character} />
  );
};
