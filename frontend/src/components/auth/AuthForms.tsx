import { IconArrowLeft } from '@tabler/icons-react';
import {
  Anchor,
  Button,
  Container,
  Group,
  Center,
  Box,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './AuthForm.module.css';

export function SignupForm() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Join the Tribe!
      </Title>

      <Text className={classes.subtitle}>
        Have an account already? <Anchor href='/login'>Login here</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@hometribe.com" required radius="md" />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md" />
        <Button fullWidth mt="xl" radius="md">
          Sign up
        </Button>
      </Paper>
    </Container>
  );
}

export function ResetPasswordForm() {
  return (
    <Container size={460} my={30}>
      <Title className={classes.resetTitle} ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Your email" placeholder="me@hometribe.com" required />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor c="dimmed" size="sm" className={classes.control}>
            <Center inline>
              <IconArrowLeft size={12} stroke={1.5} />
              <Box ml={5}><Anchor href='/login'>Back to the login page</Anchor></Box>
            </Center>
          </Anchor>
          <Button className={classes.control}>Reset password</Button>
        </Group>
      </Paper>
    </Container>
  );
}