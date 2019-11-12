import PropTypes from 'prop-types'
import React from 'react';
import {
    Button,
    Container,
    Header,
    Icon
} from 'semantic-ui-react'
import {

  
  Link
} from "react-router-dom";
/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

export const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as='h1'
        content='Smart Sport'
        inverted
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='A tecnologia te ajudando no esporte.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
    />
      <Link to="/atleta">
       <Button  size='huge' color="google plus">
        <Icon name='left arrow' />
        Sou Atleta
      </Button>
    </Link>
    <Link to="/treinador">
      <Button  size='huge' color="violet">
        Sou Treinador
        <Icon name='right arrow' />
      </Button>
    </Link>
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }
  