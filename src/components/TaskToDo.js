import React from 'react';

const TaskToDo = props => {

    const styleImportant = {
        color: 'red',
        fontWeight: 'bold',
    }

    return (
        <tr>
            <td style={props.important ? styleImportant : null}>{props.name}</td>
            <td>{props.date}</td>
            <td><button className='btn' onClick={() => props.changeTaskStatus(props.id)}>Zrobione</button><button className='btn' onClick={() => props.deleteTask(props.id)}>X</button></td>
        </tr>
    );
}

export default TaskToDo;