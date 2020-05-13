//rafce
import React,{useState,useEffect} from 'react';
import ImageCard from '../ImageCard/ImageCard';
import axios from 'axios';

const Buscador = () => {

    const [gif,setGif] = useState([]);
    const [texto, setTexto] = useState('');

    const API_KEY = 'GLSTNHUeaV7WunVHkYlH12b0Kp94xPQY';
    const ObtenerGif = () => {
        //alert('Peticion hecha');
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${texto}&limit=5`)
        .then(({data}) => {
            console.log(data)
            setGif(data.data);
        })
        .catch((err)=> console.log(err));
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setTexto(event.target.value);
    }

    useEffect(()=>{
        ObtenerGif();
    },[texto]);

    return (
        <div>
            <input type ="text" onChange={handleChange}/>
            {gif.map(element => <ImageCard img = {element.images.downsized_large.url} />)}
        </div>
    )
}
//          <img src={gif} alt=""/>
//          <button onClick={() => ObtenerGif()}> Hacer Peticion</button>
//            <ImageCard img = {gif} />
export default Buscador

