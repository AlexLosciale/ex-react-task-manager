import { useEffect, useState } from "react";

export default function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/tasks`)
        .then((res) => res.json())
        .then((data) => setTasks(data))
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
