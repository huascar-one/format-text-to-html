import { Title, Text, Anchor, Button, Container, Box, Center } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import RichTextEditor from '../test';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Prism } from '@mantine/prism';

export default function HomePage() {
  const [value, onChange] = useState('');
  console.log(value);
  return (
    <>
      <Title sx={{ fontSize: 100, fontWeight: 900, letterSpacing: -2 }} align="center" mt={100}>
        Convert
      </Title>
      <Prism language="markup">{value}</Prism>
      <br />
      <Center>
        <Button
          variant="outline"
          onClick={() => {
            onChange('');
          }}
        >
          Delete
        </Button>
      </Center>
      <br />
      <RichTextEditor value={value} onChange={onChange} />
    </>
  );
}
