import { useContext, createContext } from "react";
import useTasks from "../Hooks/useTasks";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const taskManager = useTasks();

  return (
    <GlobalContext.Provider value={taskManager}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
