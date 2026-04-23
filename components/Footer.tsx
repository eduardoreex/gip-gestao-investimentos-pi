import { Box, Container, Group, Stack, Text, Divider } from '@mantine/core';
import Image from 'next/image';

export function Footer() {
  return (
  
    <Box component="footer" bg="#18181B" pt={80} pb={128} c="white">
      <Container size="xl">
        <Stack gap={40}>
          
          <Group justify="space-between" align="flex-start">
          
            <Stack gap="md" style={{ maxWidth: 300 }}>
              <Image 
                src="/LogoSeplan.svg" 
                alt="Logo SEPLAN" 
                width={150} 
                height={40} 
                style={{ filter: 'brightness(0) invert(1)' }} // Torna a logo branca para o fundo escuro
              />
              <Text size="sm" c="gray.5" fw={500}>
                Secretaria do Planejamento do Estado do Piauí. 
                Gestão focada em resultados e transparência.
              </Text>
            </Stack>


            <Group gap={60} align="flex-start">
              <Stack gap="xs">
                <Text fw={700} size="sm" mb={10}>Institucional</Text>
                <Text size="xs" c="gray.5" style={{ cursor: 'pointer' }}>Sobre o GIP</Text>
                <Text size="xs" c="gray.5" style={{ cursor: 'pointer' }}>Portal da Transparência</Text>
                <Text size="xs" c="gray.5" style={{ cursor: 'pointer' }}>SEPLAN-PI</Text>
              </Stack>
              
              <Stack gap="xs">
                <Text fw={700} size="sm" mb={10}>Serviços</Text>
                <Text size="xs" c="gray.5" style={{ cursor: 'pointer' }}>Banco de Projetos</Text>
                <Text size="xs" c="gray.5" style={{ cursor: 'pointer' }}>Monitoramento</Text>
                <Text size="xs" c="gray.5" style={{ cursor: 'pointer' }}>Suporte Técnico</Text>
              </Stack>
            </Group>

            <Stack gap="xs">
              <Text fw={700} size="sm" mb={10}>Contato</Text>
              <Text size="xs" c="gray.5">Av. Pedro Freitas, S/N - Centro Administrativo</Text>
              <Text size="xs" c="gray.5">Teresina - PI, 64018-900</Text>
              <Text size="xs" c="gray.5">(86) 3211-0000</Text>
            </Stack>
          </Group>

          <Divider color="gray.8" />

       
          <Group justify="space-between">
            <Text size="xs" c="gray.6">
              © 2026 SEPLAN - Governo do Estado do Piauí. Todos os direitos reservados.
            </Text>
            <Group gap="md">
            
              <Text size="xs" c="gray.6" style={{ cursor: 'pointer' }}>Instagram</Text>
              <Text size="xs" c="gray.6" style={{ cursor: 'pointer' }}>YouTube</Text>
            </Group>
          </Group>

        </Stack>
      </Container>
    </Box>
  );
}