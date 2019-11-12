import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Header,
  Segment,
  Message,
  Select
} from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
const style = {
  margin: 50,
  padding: "50px 200px"
};
const options = [
  { key: "f", text: "Futebol", value: "Futebol" },
  { key: "v", text: "Volei", value: "Volei" },
  { key: "l", text: "Luta", value: "Luta" },
  { key: "n", text: "Natacao", value: "Natacao" }
];
export const Treinadores = () => {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    senha: "",
    date: "",
    esportes_capacitados: options[0].value
  });
  const [enviando, trocarEnviando] = useState(false);
  const [sucesso, trocarSucesso] = useState(false);
  const [falha, trocarFalha] = useState(false);

  const cadastrar = async () => {
    trocarEnviando(true);
    let data = JSON.stringify({ ...dados, nascimento: dados.date });
    try {
      let resposta = await axios.post(
        "http://127.0.0.1:8000/api/v1/treinador/criar/",
        data,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (resposta.status !== 201) throw new Error("Erro ao criar treinador");
      trocarSucesso(true);
      setTimeout(() => {
        trocarEnviando(false);
        trocarSucesso(false);
        setDados({
          nome: "",
          email: "",
          senha: "",
          date: "",
          esportes_capacitados: options[0].value
        });
      }, 1600);
    } catch (error) {
      trocarFalha(true);
      setTimeout(() => {
        trocarEnviando(false);
        trocarFalha(false);
      }, 1700);
      console.log("erro ao cadastrar", error);
    }
  };

  const onChange = (campo, evento, v) => {
    evento.preventDefault();

    let dadosAntigos = dados;
    let dadosParaEnviar = {};
    if (campo === "esportes_capacitados") {
      dadosParaEnviar = {
        ...dadosAntigos,
        [campo]: v.value
      };
    } else {
      dadosParaEnviar = {
        ...dadosAntigos,
        [campo]: evento.target.value
      };
    }
    setDados(dadosParaEnviar);
  };

  return (
    <Container style={style}>
      {sucesso && (
        <Message
          success
          header={`Treinador ${dados.nome} cadastrado com sucesso!`}
          content="Agora você pode monitorar sua equipe na plataforma."
        />
      )}
      {falha && (
        <Message
          error
          header={`Ops, algo deu errado`}
          content="Revise as informações e tente novamente."
        />
      )}

      <Segment>
        <Header>Cadastre-se como um Treinador</Header>
      </Segment>
      <Segment>
        <Form
          onSubmit={cadastrar}
          loading={enviando}
          success={sucesso}
          error={falha}
        >
          <Form.Field>
            <label>Nome</label>
            <input
              placeholder="Nome"
              value={dados.nome}
              onChange={e => onChange("nome", e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              value={dados.email}
              onChange={e => onChange("email", e)}
            />
          </Form.Field>
          <Form.Field
            control={Select}
            label="Esporte"
            options={options}
            placeholder="Esporte"
            onChange={(e, v) => onChange("esportes_capacitados", e, v)}
          />
          <Form.Field>
            <label>Data Nascimento</label>
            <input
              placeholder="Senha"
              type="date"
              value={dados.dataNascimento}
              onChange={e => onChange("date", e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Senha</label>
            <input
              placeholder="Senha"
              type="password"
              value={dados.senha}
              onChange={e => onChange("senha", e)}
            />
          </Form.Field>
          <Link to="/">
            <Button type="submit" color="google plus">
              Voltar
            </Button>
          </Link>
          <Button type="submit" color="green">
            Cadastrar
          </Button>
          <Link to="/dashboard-treinador">
            <Button type="submit" color="purple">
              Entrar
            </Button>
          </Link>
        </Form>
      </Segment>
    </Container>
  );
};
