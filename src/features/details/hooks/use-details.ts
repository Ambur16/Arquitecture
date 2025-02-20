import { useState } from "react";
import { useGetEpisodesByIds } from "~/entities/episode";

export const useDetails = (episodes: string[]) => {
  const [isQueryEnabled, setQueryEnabled] = useState(false);
  const handleModalOpen = () => setQueryEnabled(true);
  const handleModalClose = () => setQueryEnabled(false);

  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetEpisodesByIds({
    ids: episodes,
    enabled: isQueryEnabled,
  });

  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
    handleModalOpen,
    handleModalClose,
  };
};
