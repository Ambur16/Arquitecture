interface RightButtonProps {
  onNextPage: () => void;
  icon: React.ReactNode;
}

export const RightButton = ({ onNextPage, icon }: RightButtonProps) => {
  return (
    <button
      onClick={onNextPage}
      className="absolute right-8 top-1/2 transform p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600"
    >
      {icon}
    </button>
  );
};
