import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(#b7dff5, white, white, white, white);
  height: 100vh;
  width: 100vw;
  padding: 30px;
`;

export const Title = styled.h1`
  color: black;
`;

export const FullscreenControlWrapper = styled.div`
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
`;

export const NavWrapper = styled.div`
  position: absolute,
  top: 36,
  left: 0,
  padding: 10px,
`;

export const ScaleControlWrapper = styled.div`
  position: absolute,
  bottom: 36,
  left: 0,
  padding: 10px,
`;
