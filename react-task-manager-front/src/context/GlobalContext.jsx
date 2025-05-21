import { useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch(`${API_URL}/tasks`);
                const data = await response.json();
                setTasks(data);
                console.log("dati ricevuti:", data);
            } catch (error) {
                console.error("errore nei dati:", error);
            }
        };
        fetchTasks();
    }, []);
    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}