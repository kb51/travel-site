import React, { FC, useState } from 'react';
import { Container } from './Newsletter.styles';
import { Input, Modal, Button } from 'semantic-ui-react';

export const Newsletter: FC = () => {
  const [email, setEmail] = useState('');

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailChange = () => {
    setEmail('');
  };
  return (
    <Container>
      <h1>Sign up to our newsletter</h1>
      <p>Keep up to date with everything travel with our weekly newsletter</p>

      <Input type="text" placeholder="Your email..." action>
        <input value={email} onChange={updateEmail} />
        <Modal
          trigger={<Button type="submit">Sign up</Button>}
          header="Thank you!"
          content="Your subscription has been confirmed"
          actions={['Ok']}
          onClose={handleEmailChange}
        />
      </Input>
    </Container>
  );
};
