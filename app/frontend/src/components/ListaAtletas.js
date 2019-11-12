import React, { useEffect, useState } from "react";
import {
  Card,
  Icon,
  Button,
  Image,
  Segment,
  Container,
  Statistic
} from "semantic-ui-react";

import axios from "axios";

export const ListaAtletas = () => {
  const [atletas, adicionarAtletas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const atletasApi = await axios(`http://127.0.0.1:8000/api/v1/atleta/`);
      adicionarAtletas(atletasApi.data);
      console.log({ atletas: atletasApi });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Segment>
        <Statistic.Group>
          <Statistic label="Atletas" value={atletas.length} />
          <Statistic
            label="precisa de revisão"
            value="Visão Geral dos seus Atletas"
            text
          />
          <Statistic
            color="green"
            label="Com Condições Físicas"
            value={
              atletas.filter(a => a.condicao_fisica === "EM CONDICOES").length
            }
          />
          <Statistic
            color="red"
            label="Sem Condições Físicas"
            value={
              atletas.filter(a => a.condicao_fisica === "SEM CONDICOES").length
            }
          />
          <Statistic
            color="purple"
            label="Não Avaliado"
            value={
              atletas.filter(a => a.condicao_fisica === "NAO AVALIADO").length
            }
          />
        </Statistic.Group>
      </Segment>
      <Card.Group itemsPerRow={3}>
        {atletas.map((a, k) => (
          <Card>
            <Card.Content key={k}>
              <Card.Header>{a.nome}</Card.Header>
              <Card.Meta>{a.detalhes}</Card.Meta>
              <Card.Description>
                <strong>Sáude:</strong> {a.condicao_fisica}
              </Card.Description>
              <Card.Description>
                <strong>Peso:</strong> {a.peso}
              </Card.Description>
              <Card.Description>
                <strong>Altura:</strong> {a.altura}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Convidar
                </Button>
                <Button basic color="red">
                  Retirar
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};
