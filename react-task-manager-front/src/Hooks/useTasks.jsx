import { useEffect, useState, useRef } from "react";

export default function useTasks() {
    const [tasks, setTasks] = useState([]);
    const HandleFetch = useRef(false);

    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;  
        hasFetched.current = true; 

        fetch(`${import.meta.env.VITE_API_URL}/tasks`)
        .then((res) => res.json())
        .then((data) => {
            console.log("Task ricevuti dal backend:", data);
            setTasks(data);
            HandleFetch.current = true;
        })
        .catch((err) => console.error('Errore nel recupero dei task:', err));
    }, []);

    const addTask = (task) => {
        //
    };

    const updateTask = (updatedTask) => {
        //
    };

    const deleteTask = (taskId) => {
        //
    };

    return { tasks, addTask, updateTask, deleteTask };
}
