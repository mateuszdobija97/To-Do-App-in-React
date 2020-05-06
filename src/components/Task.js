import React from 'react';
import TaskToDo from './TaskToDo';
import TaskDone from './TaskDone';

const Task = props => {

    const { name, date, id, active, important, finishDate } = props.task;

    if (active) {
        return (
            <TaskToDo id={id} important={important} name={name} date={date} changeTaskStatus={props.changeTaskStatus} deleteTask={props.deleteTask} />
        )
    } else {
        return (
            <TaskDone id={id} finishDate={finishDate} deleteTask={props.deleteTask} name={name} />
        )
    }
}

export default Task;