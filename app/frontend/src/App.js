import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "./layout/Main";
import { Atletas } from "./components/Atletas";
import { Treinadores } from "./components/Treinadores";
import './App.css';


function App() {
  const [treinador, adicionarTreinadores] = useState([])
  const [atletas, adicionarAtletas] = useState([])
  const [competicoes, adicionarCompeticoes] = useState([])
  useEffect(() => {
      const fetchData = async () => {
        const atletasApi = await axios(
          `http://127.0.0.1:8000/api/v1/atleta/`,
        );
        const treinadorApi = await axios(
          `http://127.0.0.1:8000/api/v1/treinador/`,
        );
        const competicoesApi = await axios(
          `http://127.0.0.1:8000/api/v1/competicao/`,
        );
         
        adicionarAtletas(atletasApi.data);
        adicionarTreinadores(treinadorApi.data)
        adicionarCompeticoes(competicoesApi.data)
      };
      fetchData();
    }, []);
  return (
    <Router>
      <Switch>
      <div>
        <Route exact path="/">
        <Main treinadores={treinador.length} atletas={atletas.length} competicoes={competicoes.length}/>
        </Route>
        <Route path="/treinador" component={Treinadores}/>
        <Route path="/atleta" component={Atletas}/>
      </div>
      </Switch>
  </Router>
);
}


export default App;
