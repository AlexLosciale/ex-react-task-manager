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

    const addTask = async (task) => {
        const newTask = {
          id: Date.now(),
          title: task.title,
          description: task.description,
          completed: false,
          status: task.status,
        };
      
        try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
          });
      
          const data = await res.json();
      
          if (!data.success) {
            throw new Error(data.message);
          }
      
          setTasks((prevTasks) => [...prevTasks, data.task]);
      
          return data;
        } catch (error) {
          console.error("Errore nel salvataggio del task:", error.message);
          throw error;
        }
    };

    const updateTask = (updatedTask) => {
        //
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        fetch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            if (!data.success) {
                throw new Error(data.message);
            }
            console.log("Task eliminato con successo:", data);
        })
        .catch((err) => console.error('Errore nell\'eliminazione del task:', err));
    };

    return { tasks, addTask, updateTask, deleteTask };
}
