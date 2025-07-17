import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './UserInfoIcons.module.css';
import { Avatar, Group, Text } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/user/profile`, {
          method: 'GET',
          credentials: 'include', // send cookies
        });
        if (response.status === 401 || response.status === 403) {
          navigate('/login');
          return;
        }
        const data = await response.json();
        if (data.success) {
          setUser(data.user);
        } else {
          setError('Could not fetch profile');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;
  if (!user) return null;

  return (
    // <div style={{ maxWidth: 420, margin: '40px auto' }}>
    //   <h1>Welcome, {user.name || user.email}!</h1>
    //   <p>Email: {user.email}</p>
    //   <p>Role: {user.role}</p>
    //   {/* Add more profile info here as needed */}
    // </div>
    <div>
    <Group wrap="nowrap">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        size={94}
        radius="md"
      />
      <div>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          Budding Homeschooler
        </Text>

        <Text fz="lg" fw={500} className={classes.name}>
          {user.name}
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
          <IconAt stroke={1.5} size={16} className={classes.icon} />
          <Text fz="xs" c="dimmed">
            {user.email}
          </Text>
        </Group>
      </div>
    </Group>
  </div>
  );
};

export default ProfilePage;