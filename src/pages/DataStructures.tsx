import Button from "components/common/Button";
import { useNavigate } from "react-router-dom";

const DataStructures = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-svh p-5 ">
      <h1 className="text-4xl font-bold mb-4 text-primary dark:text-primaryDark mt-10">
        Datové struktury
      </h1>
      <div>
        <Button
          isSecondary
          className="mt-8 w-full"
          onClick={() => handleNavigate("/dataStructure/binaryTree")}
        >
          Binary tree
        </Button>
        <Button
          isSecondary
          className="mt-4 w-full"
          onClick={() => handleNavigate("/dataStructure/linkedList")}
        >
          Linked list
        </Button>
        <Button
          isSecondary
          className="mt-4 w-full"
          onClick={() => handleNavigate("/dataStructure/stack")}
        >
          Stack
        </Button>
        <Button
          isSecondary
          className="mt-4 w-full"
          onClick={() => handleNavigate("/dataStructure/queue")}
        >
          Queue
        </Button>
      </div>

      <div className="flex flex-col items-center justify-start max-w-2xl mt-8 space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-primary dark:text-primaryDark mt-10">
          {" "}
          Co jsou datové struktury{" "}
        </h1>
        <p className="text-lg text-gray-600">
          Datové struktury jsou způsoby, jak ukládat a organizovat data tak, aby
          bylo možné s nimi efektivně pracovat.
        </p>
      </div>
    </div>
  );
};

export default DataStructures;
