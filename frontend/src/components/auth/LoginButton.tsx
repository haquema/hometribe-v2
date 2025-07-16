import { Button } from "@mantine/core"
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export const LoginButton: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        login(data.token, data.user);
        // Redirect to profile/dashboard
        window.location.href = '/profile';
      } else {
        setError(data.errors?.[0]?.message || 'Login failed');
      }
    } catch {
      setError('Network error');
    }
  };
  
  return (
    <Button fullWidth mt="xl" radius="md">
      Sign in
    </Button>
  )
}