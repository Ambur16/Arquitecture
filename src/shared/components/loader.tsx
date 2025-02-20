import { Oval } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
};
