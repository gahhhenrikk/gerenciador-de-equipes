import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import { HomepageHeading } from "../components/HomePageHeading";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export class DesktopContainer extends Component {
  state = {};
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  render() {
    const { children, treinadores, atletas, competicoes } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a">{atletas} Atletas Cadastrados</Menu.Item>
                <Menu.Item as="a">
                  {treinadores} Treinadores Cadastrados
                </Menu.Item>
                <Menu.Item as="a">{competicoes} Competições</Menu.Item>

                <Menu.Item position="right">
                  {/* <Button as='a' inverted={!fixed}>
                      Entrar
                    </Button> */}
                  <Button as="a" inverted={!fixed} primary={fixed}>
                    Patrocinador
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};
