import { Context, createContext, useEffect, useMemo, useState } from 'react'
import { ItemType } from '../components/Item/types'
import { v4 as uuidv4 } from 'uuid';

export type AddTaskProps = Omit<ItemType, "id" | "isDone">

export type TasksContextProps = {
    tasks: ItemType[];
    handleIsDoneTask: (id: string) => void;
    deleteTask: (id: string) => void;
    addTask: (data: AddTaskProps) => void;
    details: {
        total: number;
        done: number;
        unDone: number;
    }
}

export const TaskContext = createContext<TasksContextProps>({} as TasksContextProps)

// @ts-ignore
const Provider = ({ children }) => {
    const [tasks, setTasks] = useState<ItemType[]>([
        { id: '123123', content: 'Something', isDone: false },
        { id: '123125', content: 'Something', isDone: true }
    ])

    const handleIsDoneTask = (id: string): void => {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                task.isDone = !task.isDone;
            }
            return task
        })
        setTasks(newTasks)
    }

    const deleteTask = (id: string): void => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks)
    }

    const addTask = (data: AddTaskProps): void => {
        const task: ItemType = {
            id: uuidv4(),
            content: data.content,
            isDone: false
        }
        setTasks(tasks => [...tasks, task])
    }

    const totalTasks = useMemo(() => tasks.length, [tasks.length]);

    const doneTasks = tasks.filter(task => task.isDone).length;

    const unDoneTasks = totalTasks - doneTasks;

    return (
        <TaskContext.Provider value={{ tasks: tasks, handleIsDoneTask, deleteTask, addTask, details: { 
            total: totalTasks, done: doneTasks, unDone: unDoneTasks
         } }}>
            {children}
        </TaskContext.Provider>
    )
}

export default Provider