import React from 'react';

const TaskDone = props => {

    const finish = new Date(props.finishDate).toLocaleString();

    return (
        <tr>
            <td>{props.name}</td>
            <td>{finish}</td>
            <td><button className='btn' onClick={() => props.deleteTask(props.id)}>X</button></td>
        </tr>
    );
}

export default TaskDone;