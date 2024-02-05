import Button from "components/common/Button";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh p-4 md:p-0">
      <h1
        className="text-4xl font-bold mb-4 text-primary dark:text-primaryDark"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Vítejte v Algoritmovém Hřišti!
      </h1>
      <p className="text-lg text-gray-600">
        Tato aplikace ukáže všem, jak fungují datové struktury a algoritmy,
        včetně třídění, vyhledávání a dalších.
      </p>
      <div className="flex flex-col items-center justify-center max-w-2xl mt-8 space-y-4">
        <Button className="mt-8 w-full">Začít</Button>
        <Button className="mt-4 w-full" isSecondary>
          Podpořte nás
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
