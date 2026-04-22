"use client";

import { Box, Container, Group, Text, Button , Burger} from '@mantine/core';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <header>

      <Box bg="gip-blue.6" py="xs">
        <Container size="xl" px={{ base: 20, md: 32, lg: 80 }}>
          <Group justify="space-between" h={32}>

            <Group gap="lg" c="white" visibleFrom='sm'>
              <Text size="xs" fw={500}>Site da Seplan</Text>
              <Text size="xs" fw={500}>Diálogos</Text>
              <Text size="xs" fw={500}>OPA</Text>
              <Text size="xs" fw={500}>dadosPI</Text>
            </Group>
                <Image 
                src="/LogoSeplan.svg"
                alt="Logo Seplan piaui"
                width={130}
                height={30}
                />
          </Group>
        </Container>
      </Box>

      <Box bg="white" py="md" style={{ borderBottom: '1px solid #E4E4E7' }}>
        <Container size="xl" px={{ base: 20, md: 32, lg: 80 }}>
          <Group justify="space-between" h={64}>
            
              <Image src="/LogoGip.svg" alt="Logo GIP" width={110} height={40}/>

            <Group gap="lg" className="text-default">
             <Text size="sm" fw={600} c="gray.7">O GIP</Text>
              <Text size="sm" fw={600} c="gray.7">Etapas</Text>
              <Text size="sm" fw={600} c="gray.7">Ferramentas</Text>
              <Text size="sm" fw={600} c="gray.7">Governança</Text> 
            </Group>
            <Group>
              <Button radius="md" size="sm" visibleFrom="sm">
                Acesso Exclusivo Servidor
              </Button>
              
              <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
            </Group>
          </Group>
        </Container>

      </Box>
      
    </header>
  );
}