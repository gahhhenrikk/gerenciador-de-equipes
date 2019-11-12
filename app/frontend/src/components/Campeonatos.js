import React, { useEffect, useState } from "react";
import { Card, Icon, Segment, Container, Statistic } from "semantic-ui-react";

import axios from "axios";

export const Campeonatos = () => {
  const [campeonatos, adicionarCampeonatos] = useState([]);
  const [equipes, adicionarEquipes] = useState([]);

  const buscarEquipes = () => {
    console.log("buscando", campeonatos);
    let paraBuscar = campeonatos.map(c =>
      axios(`http://127.0.0.1:8000/api/v1/equipe/${c.equipe}/`)
    );
    Promise.all(paraBuscar).then(v => {
      console.log(v);
      let equipesTratadas = v.map(vt => vt.data);
      adicionarEquipes(equipesTratadas);
    });
  };
  useEffect(() => {
    buscarEquipes();
  }, [campeonatos]);
  useEffect(() => {
    console.log({ equipes });
  }, [equipes]);

  useEffect(() => {
    const fetchData = async () => {
      const campeonatosApi = await axios(
        `http://127.0.0.1:8000/api/v1/competicao/`
      );
      adicionarCampeonatos(campeonatosApi.data);
      console.log({ campeonatosApi });
    };
    fetchData();
  }, []);

  const quantidadeAtleta = (id, c) => {
    let numero = 0;
    let existe = equipes.filter(e => e.id === id);
    console.log(existe, id, c);
    if (existe !== undefined) numero = existe[0].atletas.lenght;
    return numero;
  };

  return (
    <Container>
      <Segment>
        <Statistic.Group>
          <Statistic
            label="Campeonatos"
            value={campeonatos.length}
            color="orange"
          />
          <Statistic
            label="precisa de revisão"
            value="Competições Ativas"
            text
          />
          <Statistic
            label="Atletas"
            color="grey"
            value={campeonatos.reduce((p, c) => p + c.equipe, 0)}
          />
        </Statistic.Group>
      </Segment>
      <Card.Group itemsPerRow={3}>
        {campeonatos.map((campeonato, k) => (
          <Card key={k} color={"orange"}>
            <Card.Content header={campeonato.nome} />
            <Card.Content description={campeonato.esporte} />
            <Card.Content extra>
              <Icon name="user" />
              {campeonato.equipe}&nbsp;&nbsp; Atletas
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};
