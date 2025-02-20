import { motion } from "framer-motion";
import { useGetCharacters } from "~/entities/characters";
import { LoadingSpinner } from '~/shared';
import { CharacterCard } from "./index";
import { Pagination, usePagination } from "~/features/pagination/";

export const CharacterPage = () => {
  const { currentPage, handlePrevPage, handleNextPage } = usePagination();
  const { data, isLoading, isError, error } = useGetCharacters(currentPage);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid xs-grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-4 bg-gray-200">
        {data?.map((character) => (
          <motion.div key={character.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <CharacterCard character={character} />
          </motion.div>
        ))}
      </div>

      <Pagination
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </motion.div>
  );
};
