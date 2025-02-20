interface LeftButtonProps {
  onPrevPage: () => void;
  icon: React.ReactNode;
}

export const LeftButton = ({ onPrevPage, icon }: LeftButtonProps) => {
  return (
    <button
      onClick={onPrevPage}
      className="absolute left-8 top-1/2 transform p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600"
    >
      {icon}
    </button>
  );
};
