import React from 'react';
import Task from './Task'

const TaskList = props => {

    const toDo = props.tasks.filter(task => task.active === true)
    const done = props.tasks.filter(task => task.active === false)

    toDo.sort((a, b) => {

        a = a.name.toLowerCase();
        b = b.name.toLowerCase();

        if (a < b) return -1;
        if (a > b) return 1;
        return 0
    })

    done.sort((a, b) => {
        if (a.finishDate < b.finishDate) {
            return 1
        }
        if (a.finishDate > b.finishDate) {
            return -1
        }
        return 0
    })


    const tasksToDo = toDo.map(task =>
        <Task key={task.id} task={task} changeTaskStatus={props.changeTaskStatus} deleteTask={props.deleteTask} />)

    const tasksDone = done.map(task =>
        <Task key={task.id} task={task} changeTaskStatus={props.changeTaskStatus} deleteTask={props.deleteTask} />)

    return (
        <main>
            <section className='toDoTask'>
                <h2>Zadania do wykonania: <em>({tasksToDo.length})</em></h2>
                {tasksToDo.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Nazwa:</th>
                                <th>Do kiedy:</th>
                                <th>Operacje:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasksToDo}
                        </tbody>
                    </table>) : <p style={{ paddingLeft: '10px' }}>Brak zaplanowanych zadań.</p>}
            </section>
            <section className='doneTask'>
                <h2>Zadania wykonane: <em>({tasksDone.length})</em></h2>
                {tasksDone.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Nazwa:</th>
                                <th>Ukończone:</th>
                                <th>Operacje:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasksDone}
                        </tbody>
                    </table>) : <p style={{ paddingLeft: '10px' }}>Brak zrealizowanych zadań.</p>}
            </section>
        </main>
    );
}

export default TaskList;