import Item from "../../Item"
import { TasksType } from "./types"
import './style.css'
import { useContext } from "react"
import { TaskContext } from "../../../context/tasks.context"

const Tasks = (): JSX.Element => {
    const { tasks } = useContext(TaskContext);
    return (
        <div className="tasks">
            {tasks?.map(task => <Item {...task} key={task.id} />)}
        </div>
    )
}

export default Tasks