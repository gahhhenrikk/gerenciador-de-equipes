import React from "react";
import { Header, Icon, Image, Statistic, Segment } from "semantic-ui-react";

export const Performance = () => (
  <div>
    <Header as="h2" icon textAlign="center">
      <Icon name="user" circular />
      <Header.Content>Visão Geral</Header.Content>
    </Header>
    <Segment>
      <Statistic.Group widths="four">
        <Statistic color="blue">
          <Statistic.Value>22</Statistic.Value>
          <Statistic.Label>Participação em Campeonatos </Statistic.Label>
        </Statistic>

        <Statistic color="red">
          <Statistic.Value text>
            Sáude
            <br />
            Condição física
          </Statistic.Value>
          <Statistic.Label>Precisa de revisão</Statistic.Label>
        </Statistic>

        <Statistic color="green">
          <Statistic.Value>
            <Icon name="percent" /> 63
          </Statistic.Value>
          <Statistic.Label>Vitórias</Statistic.Label>
        </Statistic>

        <Statistic color="pink">
          <Statistic.Value>7</Statistic.Value>
          <Statistic.Label>Convocações</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Segment>

    <Segment>
      <Statistic.Group widths="four">
        <Statistic color="pink">
          <Statistic.Value>121</Statistic.Value>
          <Statistic.Label>(Km) distância computada</Statistic.Label>
        </Statistic>

        <Statistic color="brown">
          <Statistic.Value>53</Statistic.Value>
          <Statistic.Label>IMC</Statistic.Label>
        </Statistic>

        <Statistic color="orange">
          <Statistic.Value>148</Statistic.Value>
          <Statistic.Label>Força</Statistic.Label>
        </Statistic>
        <Statistic color="red">
          <Statistic.Value text>
            subir categoria
            <br />
          </Statistic.Value>
          <Statistic.Label>previsão de 2 semanas</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Segment>
  </div>
);
