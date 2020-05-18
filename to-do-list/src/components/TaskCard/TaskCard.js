import React, {useEffect,useState} from 'react';
import Task from '../Task/Task';
import axios from 'axios';

const TaskCard = () => {
    const [tasks,setTasks] = useState({});
    const ID = 'prueba-6b850';

    const getTasks = () => {
        axios.get(`https://${ID}.firebaseio.com/task.json`)
        .then(({data})=>setTasks(data));
    }

    useEffect(()=>{
        getTasks();
    },[]);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Mis Tareas</h5>
                <h6 className="card-subtitle mb-2 text-muted">DEV.F</h6>
                { Object.keys(tasks).map((task) =>
                    <Task 
                    key={task}
                    title={tasks[task].title} 
                    priority={tasks[task].priority} 
                    time={tasks[task].time}
                    done={tasks[task].done}
                    id={task}
                    getTasks={getTasks}
                    />) }
            </div>
        </div>
    )
}

export default TaskCard;
