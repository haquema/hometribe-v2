import styles from './Navbar.module.css';
import { Container, Group, Image } from '@mantine/core';
import { Button } from '@mantine/core';

// import classes from './HeaderSimple.module.css';

const links = [
  { link: '/register', label: 'Signup', variant: 'light' },
  { link: '/login', label: 'Login', variant: 'filled' },
];

export function Navbar() {
  const buttonProps = {
    radius: 'sm',
    color: 'blue',
    size: 'sm',
    styles: {
      root: {
        transition: 'background 0.2s',
        '&:hover': {
          backgroundColor: 'red',
        },
      },
    },
  };

  return (
    <header>
      <Container fluid className={styles.navbarContainer} >
        <Group justify="space-between" align="center">
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image src="/logo.png" alt="logo" h={30} fit="scale-down" />
          </a>
          <Group gap="md">
            {links.map((item) => (
              <Button
                key={item.link}
                component="a"
                variant={item.variant}
                href={item.link}
                {...buttonProps}
              >
                {item.label}
              </Button>
            ))}
          </Group>
        </Group>
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
      </Container>
    </header>
  );
}