import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container,
  Paper,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Group,
  // Checkbox,
  Anchor,
  Button  
} from "@mantine/core";
import classes from './AuthForm.module.css';

const apiUrl = import.meta.env.VITE_API_URL;

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log(apiUrl)
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Login failed');
      } else {
        navigate('/profile')
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Don't have an account yet? <Anchor href='/register'>Create account</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <TextInput label="Email" placeholder="you@hometribe.com" required radius="md"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}/>
          <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}/>
          <Group justify="space-between" mt="lg">
            {/* <Checkbox label="Remember me" /> */}
            <Anchor component="a" size="sm" href='/reset-password'>
              Forgot password?
            </Anchor>
          </Group>
          {error && <Text c="red" size="sm" mt="sm">{error}</Text>}
          <Button fullWidth mt="xl" radius="md" type="submit" loading={loading}>
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}