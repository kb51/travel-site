import React, { FC, useState } from 'react';
import { Container } from './Newsletter.styles';
import { Input, Modal, Button } from 'semantic-ui-react';

export const Newsletter: FC = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = React.useState(false);

  // const handleEmailChange = (event): EventTarget => {
  //   return setEmail(event.target.value)
  // }
  return (
    <Container>
      <h1>Sign up to our newsletter</h1>
      <p>Keep up to date with everything travel with our weekly newsletter</p>

      <Input type="text" placeholder="Your email..." action>
        <input />
        <Modal
          trigger={<Button type="submit">Sign up</Button>}
          header="Thank you!"
          content="Your subscription has been confirmed"
          actions={['Ok']}
        />
      </Input>
    </Container>
  );
};
