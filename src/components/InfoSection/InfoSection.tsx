import React, { FC } from 'react';
import { Container } from './InfoSection.styles';
import { Link } from 'react-router-dom';
// import { Image } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';
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
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 0.7, tension: 350, friction: 40 },
  }));

  return (
    <Container>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <Link to={path}>
        <button>Click here</button>
      </Link>
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          // @ts-ignore
          transform: props.xys.interpolate(trans),
          backgroundImage: `url(${background})`,
        }}
      />
    </Container>
  );
};
