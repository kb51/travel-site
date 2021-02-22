import React, { useEffect, useState } from 'react';
import { Container } from './NavBar.styles';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';
import './BurgerMenuStyles.css';

interface heightAndWidth {
  width: number | undefined;
  height: number | undefined;
}

export const NavBar = () => {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<heightAndWidth>({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  };

  const size = useWindowSize();

  const [activeItem, setActiveItem] = useState('');

  function handleItemClick(name) {
    setActiveItem(name);
  }

  const DesktopNavBar = () => {
    return (
      <Container>
        <Menu secondary>
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={() => handleItemClick('home')}
            />
          </Link>
          <Link to="/map">
            <Menu.Item
              name="map"
              active={activeItem === 'map'}
              onClick={() => handleItemClick('map')}
            />
          </Link>
          <Link to="/destinations">
            <Menu.Item
              name="destinations"
              active={activeItem === 'destinations'}
              onClick={() => handleItemClick('destinations')}
            />
          </Link>
          <Link to="/itineraries">
            <Menu.Item
              name="itineraries"
              active={activeItem === 'itineraries'}
              onClick={() => handleItemClick('itineraries')}
            />
          </Link>
          <Link to="/contact">
            <Menu.Item
              name="contact"
              active={activeItem === 'contact'}
              onClick={() => handleItemClick('contact')}
            />
          </Link>
          <Menu.Menu position="right">
            <Dropdown
              button
              className="icon"
              floating
              labeled
              icon="world"
              options={[
                { key: 'Italian', text: 'Italian', value: 'Italian' },
                { key: 'French', text: 'French', value: 'French' },
                { key: 'English', text: 'English', value: 'English' },
                {
                  key: 'Southern Min (inc. Hokkien and Teochew)',
                  text: 'Southern Min (inc. Hokkien and Teochew)',
                  value: 'Southern Min (inc. Hokkien and Teochew)',
                },
              ]}
              search
              text="Select Language"
              fluid
            />
            <Link to="/logout">
              <Menu.Item
                name="logout"
                active={activeItem === 'logout'}
                onClick={() => handleItemClick('logout')}
              />
            </Link>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  };

  const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (isOpen) document.body.setAttribute('style', 'overflow: hidden;');
      else document.body.setAttribute('style', 'overflow: visible;');
    }, [isOpen]);

    function handleStateChange(s) {
      setIsOpen(s.isOpen);
    }
    return (
      <BurgerMenu
        right
        width="100%"
        isOpen={isOpen}
        disableAutoFocus
        onStateChange={(state) => handleStateChange(state)}
      >
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={() => handleItemClick('home')}
          />
        </Link>
        <Link to="/map">
          <Menu.Item
            name="map"
            active={activeItem === 'map'}
            onClick={() => handleItemClick('map')}
          />
        </Link>
        <Link to="/destinations">
          <Menu.Item
            name="destinations"
            active={activeItem === 'destinations'}
            onClick={() => handleItemClick('destinations')}
          />
        </Link>
        <Link to="/itineraries">
          <Menu.Item
            name="itineraries"
            active={activeItem === 'itineraries'}
            onClick={() => handleItemClick('itineraries')}
          />
        </Link>
        <Link to="/contact">
          <Menu.Item
            name="contact"
            active={activeItem === 'contact'}
            onClick={() => handleItemClick('contact')}
          />
        </Link>
      </BurgerMenu>
    );
  };

  return (
    // @ts-ignore
    size.width > 768 ? <DesktopNavBar /> : <MobileNavBar />
  );
};
