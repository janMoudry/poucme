// import Legend from "components/DataStructures/LinkedList/Legend";
import Grafic from "components/DataStructures/LinkedList/grafic";
import BackButton from "components/common/BackButton";

const LinkedList = () => {
  return (
    <div className="flex flex-col items-center justify-start  min-h-svh w-full bg-gray-100 dark:bg-slate-800 transition-all duration-500 text-black dark:text-white pt-10">
      <BackButton />
      <h1 className="text-4xl font-bold mb-4 text-primary dark:text-primaryDark ">
        Linked List
      </h1>
      <desc
        className="text-lg text-gray-600 max-w-2xl text-center"
        id="linked-list-description"
      >
        Linked list je lineární datová struktura, ve které prvky nejsou uloženy
        na sousedních paměťových adresách. Prvky v linked listu jsou propojeny
        pomocí ukazatelů.
      </desc>
      <title>Jak vypadá</title>
      <div className="flex flex-col gap-3 mt-6 w-full justify-center items-center">
        <Grafic />
        {/* <Legend /> */}
      </div>
    </div>
  );
};

export default LinkedList;
