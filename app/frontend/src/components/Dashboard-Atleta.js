import React, { Component } from "react";
import {
  Input,
  Menu,
  Segment,
  Container,
  Button,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Campeonatos } from "./Campeonatos";
import { Equipes } from "./Equipes";
import { Performance } from "./Performance";

export class DashboardAtleta extends Component {
  state = { activeItem: "Campeonatos" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu inverted>
          <Menu.Item
            name="Campeonatos"
            active={activeItem === "Campeonatos"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Equipes"
            active={activeItem === "Equipes"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Performance"
            active={activeItem === "Performance"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/">
                <Button color="google plus">
                  Sair
                  <Icon name="right arrow" />
                </Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container>
          <Segment>
            {this.state.activeItem === "Campeonatos" && <Campeonatos />}
            {this.state.activeItem === "Equipes" && <Equipes />}
            {this.state.activeItem === "Performance" && <Performance />}
          </Segment>
        </Container>
      </div>
    );
  }
}
