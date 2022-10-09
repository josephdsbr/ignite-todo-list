import './style.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useContext, useRef, useState } from 'react'
import { TaskContext } from '../../context/tasks.context';

const Header = (): JSX.Element => {
    const [content, setContent] = useState<string>('');
    const { addTask } = useContext(TaskContext);

    const handleAddTask = () => {
        if (content == null || content.length <=3) return;
        addTask({ content })
        setContent('')
    }
    
    return (
        <header className='header'>
            <img src="logo.svg" />
            <label className='todo-label'>
                <input value={content} onChange={e => setContent(e.target.value)} placeholder="Adicione uma nova tarefa" />
                <button onClick={handleAddTask}>Criar <AiOutlinePlusCircle size={16} /></button>
            </label>
        
        </header>
    )
}
export default Header