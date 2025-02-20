import React from "react";
import { motion } from "framer-motion";
import { useFlipCard } from "../hooks/";
import { CardFront, CardBack } from "./index";
import { InfoIcon } from "~/shared";
import { CharacterModel } from "~/entities/characters/";

interface CardProps {
  character: CharacterModel;
}

export const Card: React.FC<CardProps> = ({ character }) => {
  const { isFlipped, toggleFlip } = useFlipCard();
  const frontContent = (
    <div className="w-full h-full flex flex-col">
      <div
        className="h-64 bg-cover rounded-t-xl"
        style={{ backgroundImage: `url(${character.image})` }}
      />
      <div className="p-2 text-center font-semibold">{character.name}</div>
    </div>
  );

  const backContent = (
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold">{character.name}</h3>
      <p className="text-gray-600">Status: {character.status}</p>
      <p className="text-gray-600">Species: {character.species}</p>
      <p className="text-gray-600">Gender: {character.gender}</p>
      <p className="text-gray-600">Type: {character.type}</p>
      <p className="text-gray-600">Origin: {character.origin.name}</p>
      <p className="text-gray-600">Location: {character.location.name}</p>
    </div>
  );

  return (
    <motion.div
      className="flex w-64 h-80 bg-white shadow-2xl"
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        transformStyle: "preserve-3d",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {!isFlipped ? (
        <CardFront onFlip={toggleFlip} icon={<InfoIcon />}>
          {frontContent}
        </CardFront>
      ) : (
        <CardBack onFlip={toggleFlip} icon={<InfoIcon />} episodes={character.episode}>
          {backContent}
        </CardBack>
      )}
    </motion.div>
  );
};
