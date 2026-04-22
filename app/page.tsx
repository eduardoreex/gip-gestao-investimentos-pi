import { Box,  Container, Title , Text , Button , Group , Stack } from '@mantine/core'
import { projectTraceSource } from 'next/dist/build/swc/generated-native'

export default function Home() {
  return (
    <main>
      <Box bg="primary" py={80}>
      <Container size="xl">
        <Stack gap="xl" align="center" style={{ textAlign: 'center' }}>
        <Text size="xs" fw={700} tt="uppercase" c="primary.6" bg="primary.1" px="xs" py={4} style={{ borderRadius: 4 }}>
          Gestão e Transparência
        </Text>

            <Title 
              order={1} 
              className="text-emphasis"
              style={{ 
                fontSize: '64px', 
                fontWeight: 700, 
                lineHeight: '120%',
                letterSpacing: '-2%',
                maxWidth: '900px'
              }}
              >
              GIP – Gestão do Investimento Público do Piauí
            </Title>
            <Text 
              size="lg" 
              className="text-default"
              style={{ 
                maxWidth: '700px', 
                fontWeight: 500,
                lineHeight: '140%' 
              }}
            >
              Um modelo inovador adotado pelo Governo do Piauí para aumentar a eficiência, 
              a transparência e a efetividade dos investimentos estaduais.
            </Text>

        <Group gap="md">
              <Button size="lg" radius="md" px={32}>
                Conhecer Etapas
              </Button>
              <Button variant="outline" size="lg" radius="md" px={32}>
                Banco de Projetos
              </Button>
            </Group>

          </Stack>
        </Container>
      </Box>

    </main>
  );
      
}