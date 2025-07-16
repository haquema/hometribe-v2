import React, { useState } from 'react';
import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Select,
} from '@mantine/core';
import classes from './AuthForm.module.css';

const apiUrl = import.meta.env.VITE_API_URL;

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('parent');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, role }),
        credentials: 'include',
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Registration failed');
      } else {
        setSuccess('Registration successful! Please check your email to verify your account.');
        setEmail('');
        setPassword('');
        setName('');
        setRole('parent');
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
        Join the Tribe!
      </Title>
      <Text className={classes.subtitle}>
        Have an account already? <Anchor href='/login'>Login here</Anchor>
      </Text>
      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            placeholder="Your name"
            required
            radius="md"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <TextInput
            label="Email"
            placeholder="you@hometribe.com"
            required
            radius="md"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            mt="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            radius="md"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <Select
            label="I want to sign up as"
            data={[
              { value: 'USER', label: 'Parent' },
              { value: 'VENDOR', label: 'Service' },
            ]}
            required
            mt="md"
            value={role}
            onChange={(value) => setRole(value || 'parent')}
            radius="md"
          />
          {error && <Text color="red" size="sm" mt="sm">{error}</Text>}
          {success && <Text color="green" size="sm" mt="sm">{success}</Text>}
          <Button fullWidth mt="xl" radius="md" type="submit" loading={loading}>
            Sign up
          </Button>
        </form>
      </Paper>
    </Container>
  );
} 