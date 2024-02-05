import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface BackButtonProps {
  classname?: string;
}

const BackButton: FC<BackButtonProps> = ({ classname }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const previousPageName =
    useLocation().pathname.split("/")[
      useLocation().pathname.split("/").length - 2
    ];

  return (
    <div
      className={`flex items-center cursor-pointer ${classname}`}
      onClick={handleGoBack}
    >
      <div>
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
      </div>
      <label className="text-lg font-bold ml-2 text-primary dark:text-primaryDark cursor-pointer">
        {" "}
        {previousPageName || "Go back"}
      </label>
    </div>
  );
};

export default BackButton;
