import React, { useEffect, useState } from "react";
import { Card, Icon, Statistic, Container, Segment } from "semantic-ui-react";

import axios from "axios";

export const Equipes = () => {
  const [equipes, adicionarEquipes] = useState([]);
  useEffect(() => {
    console.log({ equipes });
  }, [equipes]);

  useEffect(() => {
    const fetchData = async () => {
      const equipesApi = await axios(`http://127.0.0.1:8000/api/v1/equipe/`);
      adicionarEquipes(equipesApi.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Segment>
        <Statistic.Group>
          <Statistic label="Equipes" value={equipes.length} color="pink" />
          <Statistic
            label="precisa de revisão"
            value="Visão Geral de todas as Equipes "
            text
          />
          <Statistic
            label="Equipes Ativas"
            color="green"
            value={equipes.filter(e => e.principal).length}
          />
        </Statistic.Group>
      </Segment>
      <Card.Group itemsPerRow={3}>
        {equipes.map((equipe, k) => (
          <Card key={k} color={equipe.principal ? "green" : "grey"}>
            <Card.Content header={equipe.detalhes} />

            <Card.Content extra>
              <Icon name="user" />
              {equipe.treinador}&nbsp;&nbsp; Atletas
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};
