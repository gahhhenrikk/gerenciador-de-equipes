import PropTypes from 'prop-types'
import React from 'react'
import {
  
  Container,

  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
import { DesktopContainer } from "../components/Desktop";
import { MobileContainer } from "../components/Mobile";
import bgImage from './bg.jpg'

const ResponsiveContainer = ({ children, ...props }) => (
  <div >
    <DesktopContainer {...props}>{children}</DesktopContainer>
    <MobileContainer {...props}>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = (props) => (
    <ResponsiveContainer {...props} >
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Dê o proximo passo em sua carreira
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Deixe os clubes descobrirem suas habilidades no seu esporte preferido.
            <br/>planeje treinos, campeonatos e avaliações físicas.
            </p>
            
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={bgImage} />
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Treinador"
            </Header>
            <p style={{ fontSize: '1.33em' }}>Planeje estratégias, gerencie equipes e atletas.</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Atleta."
            </Header>
    
            <p style={{ fontSize: '1.33em' }}>Seja descoberto por treinadores, aprimore sua performace.</p>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
            Smart Sport fase Alpha
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Estamos construindo algo que acreditamos que vá transformar vidas.
          Nessa fase de alpha estamos aceitando todas sugestões para aprimorar sua experiência.
        </p>
       
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Desenvolvedores' />
              <List link inverted>
                <List.Item as='a'>Albérico Dias Barreto Filho</List.Item>
                <List.Item as='a'>Gustavo Ribeiro do Vale</List.Item>
                <List.Item as='a'>Anderson Nunes Sousa</List.Item>
                <List.Item as='a'>Gabriel Oliveira</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Esportes Suportados' />
              <List link inverted>
                <List.Item as='a'>Futebol</List.Item>
                <List.Item as='a'>Volei</List.Item>
                <List.Item as='a'>Luta</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
               Patrocionadores
              </Header>
              <p>
               Nossa plataforma acredita que retirar custos financeiros de atletas e treinadores para alcançar um sonho é realmente importante, porém acabamos absorvendo os custos para manter desenvolvimento e infraestrutura, como patrocinador você ajuda a manter essa plataforma viva para realizar sonhos.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout