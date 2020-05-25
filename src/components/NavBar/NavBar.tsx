import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e: any, { name }: { name: any }) =>
    this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          // @ts-ignore
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="map"
          active={activeItem === 'map'}
          // @ts-ignore
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="destinations"
          active={activeItem === 'destinations'}
          // @ts-ignore
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="itineraries"
          active={activeItem === 'itineraries'}
          // @ts-ignore
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="contact"
          active={activeItem === 'contact'}
          // @ts-ignore
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            // @ts-ignore
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
