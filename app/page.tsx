import { Button, Container, Title, Text, Stack } from '@mantine/core';

export default function Home() {
  return (
    <main>
      {/* O Container centraliza o conteúdo conforme os breakpoints do PDF */}
      <Container size="lg" py="xl">
        <Stack align="center" gap="md">
          
          <Title order={1} className="text-emphasis">
            GIP - Gestão do Investimento Público
          </Title>

          <Text size="lg" className="text-default">
            Testando a configuração de fontes e cores oficiais do Governo do Piauí.
          </Text>

          {/* Este botão deve aparecer automaticamente no azul gip-blue-500 */}
          <Button size="lg">
            Começar Exploração
          </Button>

        </Stack>
      </Container>
    </main>
  );
}