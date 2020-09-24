import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, useTrail, animated } from 'react-spring';
import { Button } from 'semantic-ui-react';

import { Container, TextContent } from './InfoSection.styles';
import './infoSection.css';

interface InfoSectionProps {
  title: string;
  paragraph: string;
  path: string;
  background: string;
}

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) => `perspective(600px)  scale(${s})`;

export const InfoSection: FC<InfoSectionProps> = ({
  title,
  paragraph,
  path,
  background,
}) => {
  const [props, setProps] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 0.7, tension: 350, friction: 40 },
  }));

  const items = [<h1>{title}</h1>, <p>{paragraph}</p>];
  const config = { mass: 5, tension: 1000, friction: 200 };
  const [toggle, setToggle] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <Container>
      <TextContent>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={title}
              className="trails-text"
              style={{
                ...rest,
                // @ts-ignore
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
        {/* <h1>{title}</h1>
            <p>{paragraph}</p> */}
        <Link to={path}>
          <Button basic color="pink">
            Click here
          </Button>
        </Link>
      </TextContent>
      {/* <div>
        <ViewportBlock
          onEnterViewport={() => {
            console.log('enter');
          }}
          onLeaveViewport={() => console.log('leave')}
        />
      </div> */}

      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) =>
          setProps({ xys: calc(x, y) })
        }
        onMouseLeave={() => setProps({ xys: [0, 0, 1] })}
        style={{
          // @ts-ignore
          transform: props.xys.interpolate(trans),
          backgroundImage: `url(${background})`,
        }}
      />
    </Container>
  );
};
