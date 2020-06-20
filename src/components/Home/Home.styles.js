import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(
      #b7dff5,
      transparent,
      transparent,
      transparent,
      transparent,
      rgb(247, 209, 215)
    ),
    url('https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
      no-repeat;
  height: 100vh;
  margin-left: -20px;
  margin-right: -20px;
`;

export const Title = styled.h1`
  color: #ffa6c9;
  text-shadow: 2px 2px #5f9f9f;
  font-family: 'Lobster', cursive;
  font-size: 160px;
  margin: 0;
  padding: 0;
  text-align: left;
  position: relative;
  margin-left: 60px;
  top: 140px;
`;
