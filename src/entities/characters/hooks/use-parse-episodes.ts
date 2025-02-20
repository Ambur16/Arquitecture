export const getEpisodeIds = (urls: string[]): string[] => {
  return urls.map((url) => {
    const id = url.split("/").pop();
    return id || "";
  });
};
