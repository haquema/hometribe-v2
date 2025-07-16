import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import HomePage from './components/HomePage';
import { SignupForm, ResetPasswordForm } from './components/auth/AuthForms';
import { LoginForm } from './components/auth/LoginForm';
import ProfilePage from './components/ProfilePage';
import Layout from './components/Layout';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="reset-password" element={<ResetPasswordForm />} />
            <Route path="register" element={<SignupForm />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;