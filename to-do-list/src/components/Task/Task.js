import React,{useState} from 'react';
import axios from 'axios';

const Task = ({title,priority,time,id,done,getTasks}) => {
    const [check,setCheck] = useState(done)
    const ID = 'prueba-6b850';
    
    const handleChange = () => {
        const body = {};
        body[id] ={
                done: !check,
                priority: priority,
                time: time,
                title: title
            }
        axios.patch(`https://${ID}.firebaseio.com/task.json`,body)
        .then(data => setCheck(!check))
        .catch(err => console.log(err))
    }

    const deleteNotification = () => {
        axios.delete(`https://${ID}.firebaseio.com/task/${id}.json`)
        .then(()=> getTasks())
        .catch();
    }

    return (
        <div className ="card"> 
        <div className="d-flex justify-content-between">
            <h4><span className="badge badge-secondary">{priority}</span>{title}</h4>
            <div className ="form-check">
                <input 
                className="form-check-input" 
                type = "checkbox" id={id} 
                checked={check}
                onChange= {handleChange}
                />
                <label className="form-check-" htmlFor={id}>
                    {`${time} horas`}
                </label>
                <button onClick = {() => deleteNotification() } type ="button" class="btn btn-danger" >Eliminar</button>
            </div>
        </div>
        </div>
    )
}

export default Task;
