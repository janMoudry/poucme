import Menu from "components/Menu";
import Navigation from "./navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-slate-800 text-black dark:text-white transition-all duration-500">
        <BrowserRouter>
          <Menu />
          <Navigation />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
