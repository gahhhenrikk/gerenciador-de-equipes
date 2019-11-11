import React,{useEffect,useState} from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true;
export const Atletas = () => {
    const [treinador, adicionarTreinadores] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `http://127.0.0.1:8000/api/v1/atleta/`,
          );
            console.log({result})
          adicionarTreinadores(result.data);
        };
        fetchData();
      }, []);
    
    return <div>Atletas</div>
}