import { Box, Container, Group, Text, Button } from '@mantine/core';
import Image from 'next/image';

export function Header() {
  return (
    <header>

      <Box bg="gip-blue.6" py={15}>
        <Container size="xl">
          <Group justify="space-between" h={32}>
            <Group gap="lg" c="white">
              <Text size="xs" fw={500} style={{ cursor: 'pointer' }}>Site da Seplan</Text>
              <Text size="xs" fw={500} style={{ cursor: 'pointer' }}>Diálogos</Text>
              <Text size="xs" fw={500} style={{ cursor: 'pointer' }}>OPA</Text>
              <Text size="xs" fw={500} style={{ cursor: 'pointer' }}>dadosPI</Text>
            </Group>
                <Image 
                src="/LogoSeplan.svg"
                alt="Logo Seplan piaui"
                width={200}
                height={40}
                />
          </Group>
        </Container>
      </Box>

      <Box bg="white" py="md" style={{ borderBottom: '1px solid #E4E4E7' }}>
        <Container size="xl">
          <Group justify="space-between" h={64}>
            
              <Image 
              src="/LogoGip.svg"
              alt="Logo GIP"
              width={110}
              height={40}
              style={{ objectFit: 'contain' }}
              />

            <Group gap="lg" className="text-default">
              <Text size="sm" fw={600} c="gray.7" style={{ cursor: 'pointer' }}>O GIP</Text>
              <Text size="sm" fw={600} c="gray.7" style={{ cursor: 'pointer' }}>Etapas</Text>
              <Text size="sm" fw={600} c="gray.7" style={{ cursor: 'pointer' }}>Ferramentas</Text>
              <Text size="sm" fw={600} c="gray.7" style={{ cursor: 'pointer' }}>Governança</Text>
            </Group>

            <Button radius="md" size="sm">
              Acesso Exclusivo Servidor
            </Button>

          </Group>
        </Container>
      </Box>
      
    </header>
  );
}