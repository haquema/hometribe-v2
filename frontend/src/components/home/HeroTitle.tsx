import { Button, Container, Group, Text } from '@mantine/core';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Homeschooling made{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'indigo', to: 'blue' }} inherit>
            simple.
          </Text>{' '}
        </h1>

        <Text className={classes.description} color="dimmed">
        The all-in-one place to plan lessons, track progress, and build a community of learners. We've got all the tools to make your homeschooling a success!
        </Text>

        <Group className={classes.controls}>
          <Button
            size="lg"
            className={classes.control}
            color='blue'
            variant="filled"
            // gradient={{ from: 'blue', to: 'red' }}
          >
            Get started
          </Button>
        </Group>
      </Container>
    </div>
  );
}