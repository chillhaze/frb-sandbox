import { Box, Button, Checkbox, Group, Text, TextInput } from '@mantine/core';
import React from 'react';
import { MainContainer } from 'ui';
import { useForm } from '@mantine/form';

export const App: React.FC = () => {
  const form = useForm({
    initialValues: {
      phoneNumber: '',
      termsOfService: false,
    },

    validate: {
      phoneNumber: value =>
        /^[+][0-9]{12}$/gm.test(value) ? null : 'Invalid number',
    },
  });

  return (
    <MainContainer>
      <Text>My app</Text>

      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit(values => console.log(values))}>
          <TextInput
            withAsterisk
            label="Phone number"
            placeholder="+380509874545"
            {...form.getInputProps('phoneNumber')}
          />

          <Checkbox
            mt="md"
            label="I agree to store my private data"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </MainContainer>
  );
};
