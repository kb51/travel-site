import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';

function NavBar() {
  // @ts-ignore
  const [activeItem, setActiveItem] = useState('home');

  function handleItemClick(name) {
    setActiveItem(name);
  }

  return (
    <Menu secondary>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        // @ts-ignore
        onClick={() => handleItemClick('home')}
      />
      <Menu.Item
        name="map"
        active={activeItem === 'map'}
        // @ts-ignore
        onClick={() => handleItemClick('map')}
      />
      <Menu.Item
        name="destinations"
        active={activeItem === 'destinations'}
        // @ts-ignore
        onClick={() => handleItemClick('destinations')}
      />
      <Menu.Item
        name="itineraries"
        active={activeItem === 'itineraries'}
        // @ts-ignore
        onClick={() => handleItemClick('itineraries')}
      />
      <Menu.Item
        name="contact"
        active={activeItem === 'contact'}
        // @ts-ignore
        onClick={() => handleItemClick('contact')}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item
          name="logout"
          active={activeItem === 'logout'}
          // @ts-ignore
          onClick={() => handleItemClick('logout')}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default NavBar;
