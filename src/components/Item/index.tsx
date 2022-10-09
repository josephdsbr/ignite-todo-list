import { ItemType } from "./types";
import { BsCheckCircleFill as CheckIcon } from 'react-icons/bs'
import { MdOutlineRadioButtonUnchecked as UnCheckIcon } from 'react-icons/md'
import { FaTrash as RemoveIcon } from 'react-icons/fa'
import './style.css'
import { useContext } from "react";
import { TaskContext } from "../../context/tasks.context";

const Item = ({isDone, content, id }: ItemType): JSX.Element => {
    const { handleIsDoneTask, deleteTask } = useContext(TaskContext);

    return (
        <div className={isDone ? "item-done" : 'item'}>
            <button onClick={() => handleIsDoneTask(id)}>
                {isDone ? <CheckIcon color={'#8284FA'} size={24}/> : <UnCheckIcon color={'#4EA8DE'} size={24} />}
            </button>
            
            <span>{ content }</span>
            <button onClick={() => deleteTask(id)}>
                <RemoveIcon size={16} color={'#808080'} />
            </button>
            
        </div>
    )
}

export default Item;