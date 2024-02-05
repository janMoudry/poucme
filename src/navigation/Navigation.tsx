import DataStructures from "pages/DataStructures";
import LinkedList from "pages/DataStructures/LinkedList";
import HomePage from "pages/Home";
import { Route, Routes } from "react-router-dom";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/dataStructure" element={<DataStructures />} />
      <Route path="/dataStructure/binaryTree" element={<h1>Binary Tree</h1>} />
      <Route path="/dataStructure/heap" element={<h1>Heap</h1>} />
      <Route path="/dataStructure/linkedlist" element={<LinkedList />} />
      <Route path="/dataStructure/queue" element={<h1>Queue</h1>} />
      <Route path="/dataStructure/stack" element={<h1>Stack</h1>} />

      <Route path="/algorithms" element={<h1>Algorithms</h1>} />
      <Route path="/algorithms/sorting" element={<h1>Sorting</h1>} />
      <Route path="/algorithms/searching" element={<h1>Searching</h1>} />
      <Route path="/algorithms/graphs" element={<h1>Graphs</h1>} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default Navigation;
