import { RiTodoLine as Icon } from 'react-icons/ri';
import './style.css'

const NoTasks = (): JSX.Element => (
    <div className='no-tasks'>
        <Icon size={64} color={'#808080'} />
        <div className='no-tasks-content'>
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus items a fazer</span>
        </div>
    </div>
)

export default NoTasks