import { Box,  Container, Title , Text , Button , Group , Stack } from '@mantine/core'
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
      <Box bg="white" py={96}> 
        <Container size="xl">
          <Group align="flex-start" grow>
            
            <Stack gap="md">
              <Text c="primary.6" fw={700} size="sm" tt="uppercase" lts={1}>
                Sobre o Programa
              </Text>
              <Title order={2} size="40px" fw={700} c="gray.9" style={{ lineHeight: 1.2 }}>
                Uma nova forma de gerir <br /> o futuro do Piauí
              </Title>
            </Stack>

            <Stack gap="lg">
              <Text size="lg" c="gray.7" style={{ lineHeight: 1.7 }}>
                O GIP (Gestão do Investimento Público) é uma metodologia estratégica que 
                integra o ciclo de planejamento, execução e monitoramento de projetos 
                prioritários do Estado.
              </Text>
              <Text size="lg" c="gray.7" style={{ lineHeight: 1.7 }}>
                Nosso foco é garantir que cada recurso investido se transforme em 
                benefícios reais para a população, com metas claras e transparência total.
              </Text>
            </Stack>

          </Group>
        </Container>
      </Box>
    </main>
  );
}