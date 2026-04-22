import { Box, Container, Group, Text, Button } from '@mantine/core';

export function Header() {
  return (
    <header>
      
      {}
      {}
      <Box bg="gip-blue.6" py="xs">
        
        {}
        <Container size="xl">
          
          {}
          <Group justify="space-between">
            <Text c="white" size="sm" fw={500}>
              Site da Seplan | Diálogos | DPA ...
            </Text>
            
            <Text c="white" size="sm">
              [Logos Governo do Piauí Aqui]
            </Text>
          </Group>

        </Container>
      </Box>


      {}
      <Box bg="white" py="md" style={{ borderBottom: '1px solid #E4E4E7' }}>
        <Container size="xl">
          <Group justify="space-between">
            
            {}
            <Text size="xl" fw={700} className="text-emphasis">
              dadosPI
            </Text>

            {}
            <Group gap="lg" className="text-default">
              <Text size="sm" fw={500}>Item</Text>
              <Text size="sm" fw={500}>Item</Text>
              <Text size="sm" fw={500}>Item</Text>
            </Group>

            {}
            <Button>
              Acesso Exclusivo Servidor
            </Button>

          </Group>
        </Container>
      </Box>

    </header>
  );
}