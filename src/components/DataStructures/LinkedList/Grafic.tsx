import { FC } from "react";

interface GraficProps {}

const Grafic: FC<GraficProps> = () => {
  return (
    <svg
      height={"500px"}
      width={"50%"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`bg-whit dark:bg-black text-primary dark:text-primaryDark`}
    >
      <circle cx="50" cy="50" r={"10"} fill="currentColor" />
    </svg>
  );
};

export default Grafic;
