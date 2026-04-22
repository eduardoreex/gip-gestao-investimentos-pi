import { Box, Container, Title, Text, Button, Group, Stack, SimpleGrid, Paper } from '@mantine/core';

export default function Home() {
  return (
    <main>
      
      <Box bg="primary.0" py={{ base: 48, lg: 80 }}>
        <Container size="xl" px={{ base: 20, md: 32, lg: 80 }}>
          <Stack gap="xl" align="center" style={{ textAlign: 'center' }}>
            
            <Text size="xs" fw={700} tt="uppercase" c="primary.6" bg="primary.1" px="xs" py={4} style={{ borderRadius: 4 }}>
              Gestão e Transparência
            </Text>

            <Title 
              order={1} 
              fz={{ base: 32, sm: 36, lg: 64 }} 
              style={{ lineHeight: '120%', letterSpacing: '-2%', maxWidth: 900 }}
            >
              GIP – Gestão do Investimento Público do Piauí
            </Title>
            
            <Text 
              fz={{ base: 16, lg: 18 }}
              style={{ maxWidth: 700, lineHeight: '140%' }}
            >
              Um modelo inovador adotado pelo Governo do Piauí para aumentar a eficiência, 
              a transparência e a efetividade dos investimentos estaduais.
            </Text>

            <Group gap="md" justify="center">
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

  
      <Box bg="white" pt={{ base: 64, md: 96, lg: 128 }} pb={{ base: 32, md: 48, lg: 80 }}> 
        <Container size="xl" px={{ base: 20, md: 32, lg: 80 }}>
         
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 'xl', md: 50 }}>
            
            <Stack gap="md">
              <Text c="primary.6" fw={700} size="sm" tt="uppercase" lts={1}>
                Sobre o Programa
              </Text>
              <Title order={2} fz={{ base: 22, sm: 28, md: 36 }} style={{ lineHeight: 1.2 }}>
                Uma nova forma de gerir <br /> o futuro do Piauí
              </Title>
            </Stack>

            <Stack gap="lg">
              <Text fz={{ base: 16, lg: 18 }} style={{ lineHeight: 1.7 }}>
                O GIP (Gestão do Investimento Público) é uma metodologia estratégica que 
                integra o ciclo de planejamento, execução e monitoramento de projetos prioritários do Estado.
              </Text>
              <Text fz={{ base: 16, lg: 18 }} style={{ lineHeight: 1.7 }}>
                Nosso foco é garantir que cada recurso investido se transforme em benefícios reais para a população, 
                com metas claras e transparência total.
              </Text>
            </Stack>

          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" py={{ base: 32, md: 48, lg: 80 }} bg="neutral.1"> {/* neutral.1 é o fundo levemente cinza */}
        <Container size="xl" px={{ base: 20, md: 32, lg: 80 }}>
          <Stack gap="xl">
            
            <Title order={2} fz={{ base: 22, sm: 28, md: 36 }} style={{ textAlign: 'center' }}>
              As 6 Etapas do Ciclo GIP
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" verticalSpacing="lg">
             
              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl" c="primary.6" mb="xs">01</Text>
                <Title order={3} fz={22} mb="sm">Planejamento</Title>
                <Text size="sm">Identificação de demandas estratégicas e alinhamento com o plano de governo.</Text>
              </Paper>
             
              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl" c="primary.6" mb="xs">02</Text>
                <Title order={3} fz={22} mb="sm">Seleção e Priorização</Title>
                <Text size="sm">Análise técnica e escolha dos projetos com maior impacto social e econômico.</Text>
              </Paper>
              
              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl" c="primary.6" mb="xs">03</Text>
                <Title order={3} fz={22} mb="sm">Monitoramento</Title>
                <Text size="sm">Acompanhamento em tempo real da execução física e financeira das obras.</Text>
              </Paper>
       
              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl" c="primary.6" mb="xs">04</Text>
                <Title order={3} fz={22} mb="sm">Avaliação</Title>
                <Text size="sm">Verificação dos resultados e impactos gerados pelos projetos.</Text>
              </Paper>
             
              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl" c="primary.6" mb="xs">05</Text>
                <Title order={3} fz={22} mb="sm">Transparência</Title>
                <Text size="sm">Disponibilização das informações para a população de forma clara.</Text>
              </Paper>
              
              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl" c="primary.6" mb="xs">06</Text>
                <Title order={3} fz={22} mb="sm">Otimização</Title>
                <Text size="sm">Aprimoramento contínuo das ações com base em dados, indicadores e resultados.</Text>
              </Paper>
            </SimpleGrid>

          </Stack>
        </Container>
      </Box>


      <Box component="section" py={{ base: 32, md: 48, lg: 80 }} bg="white">
        <Container size="xl" px={{ base: 20, md: 32, lg: 80 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, lg: 70 }}>
            
            <Box style={{ width: '100%', height: '300px', backgroundColor: '#EDF8FD', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text c="primary.6" fw={600}>Gráfico de Governança</Text>
            </Box>

            <Stack gap="xl">
              <Title order={2} fz={{ base: 22, sm: 28, md: 36 }}>
                Estrutura de Governança
              </Title>
              <Text fz={{ base: 16, lg: 18 }}>
                A governança do GIP garante que cada projeto passe por uma análise rigorosa 
                de comitês técnicos, assegurando transparência e a melhor aplicação dos recursos públicos.
              </Text>

              <Stack gap="sm">
                <Group gap="sm" wrap="nowrap"> 
                  <Text fw={700} c="primary.6">✓</Text>
                  <Text fz={16}>Transparência total nos investimentos</Text>
                </Group>
                <Group gap="sm" wrap="nowrap">
                  <Text fw={700} c="primary.6">✓</Text>
                  <Text fz={16}>Monitoramento técnico contínuo</Text>
                </Group>
                <Group gap="sm" wrap="nowrap">
                  <Text fw={700} c="primary.6">✓</Text>
                  <Text fz={16}>Alinhamento com o Plano de Governo</Text>
                </Group>
              </Stack>
            </Stack>

          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" pt={{ base: 32, md: 48, lg: 80 }} pb={{ base: 64, md: 96, lg: 128 }} bg="primary.0">
        <Container size="xl" px={{ base: 20, md: 32, lg: 80 }}>
          <Paper radius="lg" p={{ base: 32, md: 64 }} bg="white" withBorder style={{ textAlign: 'center', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}>
            <Stack gap="xl" align="center">
              
              <Title order={2} fz={{ base: 22, sm: 28, md: 36 }}>
                Conheça o Banco de Projetos
              </Title>

              <Text maw={720} fz={{ base: 16, lg: 18 }}>
                Acesse a ferramenta oficial onde todos os projetos de investimento do estado 
                são cadastrados, analisados e monitorados. Transparência total para o gestor e para o cidadão.
              </Text>
              
              <Button size="xl" radius="md" px={{ base: 24, md: 48 }}>
                Acessar Banco de Projetos
              </Button>
              
            </Stack>
          </Paper>
        </Container>
      </Box>

    </main>
  );
}