import img from "~/shared/img/rick-y-morty-fanart.jpg";

export const HomePage = () => {
  return (
    <div
      className="min-h-full w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="text-white text-8xl font-serif w-1/2 text-center">
        Rick and Morti Dictionary
      </h1>
    </div>
  );
};
