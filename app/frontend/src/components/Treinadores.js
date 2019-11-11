import React from 'react'
import { Button, Form, Container,Header,Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
const style = {
  margin: 50,
  padding: '50px 200px'
}

export const Treinadores = () => (
  <Container style={style}>
    <Segment>
  <Header>Cadastre-se como um Treinador</Header>
    </Segment>
    <Segment>
  <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Senha</label>
      <input placeholder='Senha' />
        </Form.Field>
        <Link to="/">
          <Button type='submit'>Voltar</Button>
          </Link>
    <Button type='submit'>Cadastrar</Button>
  </Form>  </Segment></Container>
)

