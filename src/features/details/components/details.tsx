import React, { useState } from "react";
import { Modal } from "~/features/modal";
import { CloseIcon } from "~/shared";
import { LoadingSpinner } from "~/shared";
import { useDetails } from "../hooks/use-details";

interface MoreDetailsButtonProps {
  episodes: string[];
}

export const MoreDetailsButton: React.FC<MoreDetailsButtonProps> = ({ episodes }) => {
  const { data, isLoading, isError, error, handleModalOpen, handleModalClose } = useDetails(episodes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
    handleModalOpen();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    handleModalClose();
  };

  return (
    <>
      <div
        onClick={openModal}
        style={{
          position: "absolute",
          bottom: "8px",
          left: "8px",
          fontSize: "14px",
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
          transform: "scaleX(-1)",
        }}
      >
        More Details
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} icon={<CloseIcon />}>
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <div>Error: {error?.message}</div>
        ) : (
          <div>
            {data && data.length > 0 ? (
              <ul>
                {data.map((episode) => (
                  <li key={episode.id} className="border-b pb-4">
                  <strong className="block text-lg">{episode.name}</strong>
                  
                  <div className="mt-2 text-gray-600">
                    <span>📅 <strong>Air Date:</strong> {episode.air_date}</span>
                  </div>
              
                  <div className="mt-2 text-gray-600">
                    <span>🎬 <strong>Episode:</strong> {episode.episode}</span>
                  </div>
              
                  <div className="mt-2 text-gray-600">
                    <span>🕒 <strong>Created:</strong> {new Date(episode.created).toLocaleDateString()}</span>
                  </div>
                </li>
                ))}
              </ul>
            ) : (
              <div>No episodes found.</div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};
