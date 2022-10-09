import { useContext } from "react"
import { TaskContext } from "../../../context/tasks.context"
import Counter from "../../Counter"
import './style.css'

const TableHeader = (): JSX.Element => {
    const { details } = useContext(TaskContext);

    return (
        <div className="table-header">
            <div className="header-info"><span>Tarefas criadas</span> <Counter amount={details.total}/></div>
            <div className="header-info header-info-done"><span>Concluídas</span> <Counter amount={details.done} total={details.total}/></div>
        </div>
    )
}

export default TableHeader