"use client";

import { Box, Container, Group, Text, Button, Burger, TextInput } from '@mantine/core';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';


const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header>
      
      <Box bg="gip-blue.6" py={8}>
        <Container size="xl" px={{ base: 20, md: 32, lg: 80 }}>
          <Group justify="space-between" h={70}>
            
            <Group gap="lg" visibleFrom="sm">
              
              <Button 
                variant="white" 
                color="gip-blue.6" 
                size="compact-sm" 
                radius="sm"
                fw={600}
              >
              Site da Seplan
              </Button>

              <Text size="xs" fw={600} c="white" style={{ cursor: 'pointer' }}>Diálogos</Text>
              <Text size="xs" fw={600} c="white" style={{ cursor: 'pointer' }}>OPA</Text>
              <Text size="xs" fw={600} c="white" style={{ cursor: 'pointer' }}>dadosPI</Text>
              <Text size="xs" fw={600} c="white" style={{ cursor: 'pointer' }}>Pactos pelo Piauí</Text>
              <Text size="xs" fw={600} c="white" style={{ cursor: 'pointer' }}>Retribuir</Text>
              <Text size="xs" fw={600} c="white" style={{ cursor: 'pointer' }}>PSI</Text>
              <Text size="xs" fw={600} c="white" style={{ cursor: 'pointer' }}>Pilares</Text>
            </Group>

            <Image 
              src="/LogoSeplan.svg" 
              alt="Logo SEPLAN Piauí" 
              width={150} 
              height={70} 
              style={{ objectFit: 'contain' }}
            />
          </Group>
        </Container>
      </Box>

      <Box bg="white" py="md" style={{ borderBottom: '1px solid #E4E4E7' }}>
        <Container size="xl" px={{ base: 20, md: 32, lg: 80 }}>
          <Group justify="space-between" h={64}>
            
            <Image src="/LogoGip.svg" alt="Logo GIP" width={110} height={40}/>

            <Group gap="xl" visibleFrom="lg">
              <Text size="sm" fw={600} style={{ cursor: 'pointer' }}>O GIP</Text>
              <Text size="sm" fw={600} style={{ cursor: 'pointer' }}>Etapas</Text>
              <Text size="sm" fw={600} style={{ cursor: 'pointer' }}>Ferramentas</Text>
              <Text size="sm" fw={600} style={{ cursor: 'pointer' }}>Governança</Text>
            </Group>

            <Group gap="md">
              <TextInput 
                placeholder="O que você procura?"
                size="sm"
                radius="xl"
                leftSection={<SearchIcon />}
                visibleFrom="md"
                styles={{
                  input: { backgroundColor: '#f4f4f5', border: 'none' }
                }}
              />
              <Button radius="md" size="sm" visibleFrom="sm" color="gip-blue.5">
                Acesso Exclusivo Servidor
              </Button>
              
              <Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="sm" />
            </Group>
          </Group>
        </Container>
      </Box>
    </header>
  );
}