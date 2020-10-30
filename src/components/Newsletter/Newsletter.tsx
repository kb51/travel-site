import React, { FC, useState } from 'react';
import { Container } from './Newsletter.styles';
import { Input, Modal, Button } from 'semantic-ui-react';

export const Newsletter: FC = () => {
  const [email, setEmail] = useState('')
  const [open, setOpen] = React.useState(false)

  // const handleEmailChange = (event): EventTarget => {
  //   return setEmail(event.target.value)
  // }
  return (
    <Container>
      <h1>Sign up to our newsletter</h1>
      <p>Keep up to date with everything travel with our weekly newsletter</p>
      <Input onChange={event => setEmail(event.target.value)} action="Sign up" placeholder="Your email..." />
      <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Input action="Sign up" placeholder="Your email..." />}
      >
        <Modal.Header>Thank you!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
          Your subscription has been confirmed
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
};
