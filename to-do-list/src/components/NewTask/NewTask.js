import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from  'axios';


const NewTask = () => {

    const ID = 'prueba-6b850';

    const [title,setTitle] = useState('');
    const [priority,setPriority] = useState(null);
    const [time,setTime] = useState(null);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    const handTitle = (e) =>{
        //console.log(e.target.value);
        setTitle(e.target.value);
    }

    const handPriority = (e) =>{
        //console.log(e.target.value);
        setPriority(e.target.value);
    }

    const handTime = (e) => {
        //console.log(e.target.value);
        setTime(e.target.value);
    }

    const createTask = () => {
        setLoading(true);
        if(priority > 1 && priority <=3 && time>1 && time <=5 && title.length > 0){
        const body= {
            title: title,
            done: false,
            priority: priority,
            time: time
        }
        axios.post(`https://${ID}.firebaseio.com/task.json`,body)
            .then(()=>{
                history.push('/')
            })
            .catch(()=> {
                setError("Error de Conexion");
                setLoading(false);
            });
        }else{
            //alert("Informaion Invalida")
            setError('Verifica Informacion');
            setLoading(false);
        }
    }

    return (
        <div className="card">
            <h1>Crear Tarea</h1>
            <div className = "form-group">
                <div className="container">
                <label htmlFor=""> Ingrese el titulo de la tarea</label>
                <input onChange={handTitle} placeholder="No mayor a 30 caracteres" value={title} className="form-control" type="text"/>
            </div>
            <div className = "form-group">
                <label htmlFor=""> Cual es la prioridad?</label>
                <input onChange={handPriority} placeholder="Valor entre 1 y 3" value={priority} className="form-control" type="number" max="3" min="0"/>
            </div>
            <div className = "form-group">
                <label htmlFor=""> Cual tiempo?</label>
                <input onChange={handTime} placeholder="Valor entre 1 y 5" value={time} className="form-control" type="number" min="0"/>
            <div className="text-danger">
                {error}
            </div>
            </div>
            { loading
                ? <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                : <button onClick={()=> createTask()} type="submit" className="btn btn-primary">Crear tarea</button>
            }
            </div>
        </div>
    )
}

export default NewTask
