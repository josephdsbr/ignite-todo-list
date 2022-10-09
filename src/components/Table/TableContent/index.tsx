import { useContext, useMemo, useState } from 'react';
import { TaskContext } from '../../../context/tasks.context';
import { ItemType } from '../../Item/types';
import NoTasks from '../NoTasks';
import Tasks from '../Tasks';
import './style.css'


const TableContent = (): JSX.Element => {
    const { details: { total } } = useContext(TaskContext);
    
    const hasTasks = total > 0;

    return (
    <div className={`table-content-wrapper ${hasTasks && 'table-content-wrapper--no-empty'}`}>
        {hasTasks ? (<Tasks />) : (<NoTasks />)}
    </div>
    )
}

export default TableContent;