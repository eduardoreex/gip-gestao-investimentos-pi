import { Box,  Container, Title , Text , Button , Group , Stack, SimpleGrid , Paper} from '@mantine/core'
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
      <Box component="section" py={80} bg="gray.0">
        <Container size="xl">
          <Stack gap="xl">
            
            <Title 
              order={2} 
              className="text-emphasis"
              style={{ fontSize: '36px', fontWeight: 700, textAlign: 'center' }}
            >
              As 6 Etapas do Ciclo GIP
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" verticalSpacing="lg">
              
              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl"  c="gip-blue.6" mb="xs">01</Text>
                <Title order={3} size="22px" mb="sm" className="text-emphasis">Planejamento</Title>
                <Text size="sm" className="text-default">
                  Identificação de demandas estratégicas e alinhamento com o plano de governo.
                </Text>
              </Paper>

              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl"  c="gip-blue.6" mb="xs">02</Text>
                <Title order={3} size="22px" mb="sm" className="text-emphasis">Seleção e Priorização</Title>
                <Text size="sm" className="text-default">
                  Análise técnica e escolha dos projetos com maior impacto social e econômico.
                </Text>
              </Paper>

              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl"  c="gip-blue.6" mb="xs">03</Text>
                <Title order={3} size="22px" mb="sm" className="text-emphasis">Monitoramento</Title>
                <Text size="sm" className="text-default">
                  Acompanhamento em tempo real da execução física e financeira das obras.
                </Text>
              </Paper>

            
            
              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl"  c="gip-blue.6" mb="xs">04</Text>
                <Title order={3} size="22px" mb="sm" className="text-emphasis">Avaliação</Title>
                <Text size="sm" className="text-default">
                  Verificação dos resultados e impactos gerados pelos projetos.
                </Text>
              </Paper>
              
              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl" c="gip-blue.6" mb="xs">05</Text>
                <Title order={3} size="22px" mb="sm" className="text-emphasis">Transparência</Title>
                <Text size="sm" className="text-default">
                  Disponibilização das informações para a população
                </Text>
              </Paper>

              <Paper shadow="sm" p="xl" radius="md" withBorder>
                <Text fw={700} size="xl" c="gip-blue.6" mb="xs">06</Text>
                <Title order={3} size="22px" mb="sm" className="text-emphasis">Otimização</Title>
                <Text size="sm" className="text-default">
                  Aprimoramento contínuo das ações com base em dados, indicadores e resultados obtidos.
                </Text>
              </Paper>


            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Box component="section" py={80} bg="white">
        <Container size="xl" px={80}>
          <Group align="center" gap={70}>
            
            <Box style={{ flex: 1, position: 'relative', height: '400px' }}>
               <Box 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#EDF8FD',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text c="primary.6" fw={600}>Gráfico de Governança</Text>
              </Box>
            </Box>

            <Stack gap="xl" style={{ flex: 1 }}>
              <Title 
                order={2} 
                className="text-emphasis"
                style={{ fontSize: '36px', fontWeight: 700 }}
              >
                Estrutura de Governança
              </Title>
              
              <Text className="text-default" style={{ fontSize: '18px', fontWeight: 500 }}>
                A governança do GIP garante que cada projeto passe por uma análise rigorosa 
                de comitês técnicos, assegurando transparência e a melhor aplicação 
                dos recursos públicos
              </Text>

              <Stack gap="sm">
                <Group gap="sm">
                  <Text fw={700} c="primary.6">✓</Text>
                  <Text size="sm" fw={500} className="text-default">Transparência total nos investimentos </Text>
                </Group>
                <Group gap="sm">
                  <Text fw={700} c="primary.6">✓</Text>
                  <Text size="sm" fw={500} className="text-default">Monitoramento técnico contínuo </Text>
                </Group>
                <Group gap="sm">
                  <Text fw={700} c="primary.6">✓</Text>
                  <Text size="sm" fw={500} className="text-default">Alinhamento com o Plano de Governo </Text>
                </Group>
              </Stack>
            </Stack>

          </Group>
        </Container>
      </Box>
    
      <Box component="section" pt={80} pb={128} bg="primary.0">
        <Container size="xl">
          <Paper 
            radius="lg" 
            p={64} 
            bg="white" 
            withBorder 
            style={{ 
              textAlign: 'center',
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
            }}
          >
            <Stack gap="xl" align="center">
              <Title 
                order={2} 
                className="text-emphasis"
                style={{ fontSize: '36px', fontWeight: 700 }}
              >
                Conheça o Banco de Projetos
              </Title>

              <Text 
                className="text-default" 
                maw={720} 
                style={{ fontSize: '18px', fontWeight: 500, lineHeight: '140%' }}
              >
                Acesse a ferramenta oficial onde todos os projetos de investimento do estado 
                são cadastrados, analisados e monitorados. Transparência total para o gestor 
                e para o cidadão.
                
              </Text>
              <Button size="xl" radius="md" px={48}>
                Acessar Banco de Projetos
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </main>
  );
}