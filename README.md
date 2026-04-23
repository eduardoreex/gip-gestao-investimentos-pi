# 🏛️ GIP - Gestão do Investimento Público do Piauí

- Landing Page responsiva desenvolvida como resolução do desafio técnico para a vaga de Estágio em Desenvolvimento Front-end na SEPLAN-PI.

O objetivo deste projeto é apresentar de forma clara, moderna e acessível a metodologia do GIP, destacando suas etapas, governança e ferramentas, seguindo rigorosamente o Guia de Estilo (Figma) fornecido pela Diretoria de Tecnologia e Inovação (DITI).

## Tecnologias Utilizadas

A arquitetura do projeto foi desenhada focando em *Performance (SSR)*, *Consistência Visual* e *Manutenibilidade*:

*Next.js 14 (App Router):* Escolhido pelo poder do Server-Side Rendering (SSR), garantindo carregamento instantâneo da página e otimização de SEO para motores de busca.
*Mantine UI v7:* Utilizado como motor de Design System. Todos os tokens de cor, tipografia e espaçamentos do Guia de Estilo foram injetados na raiz do projeto (`MantineProvider`).
*Tailwind CSS:* Utilizado para manipulações de layout de baixo nível e utilitários de posicionamento rápido.
*TypeScript:* Garantindo tipagem estática, auto-complete previsível e zero bugs de compilação.

## Decisões de Engenharia e Destaques

1.  **Arquitetura Mobile-First sem Media Queries:** Em vez de poluir o código com arquivos CSS externos, a responsividade foi aplicada diretamente nas props dos componentes do Mantine (ex: `fz={{ base: 32, lg: 64 }}` e `SimpleGrid cols={{ base: 1, md: 2 }}`), garantindo uma transição fluida entre celular, tablet e desktop.
2.  **Centralização de Design Tokens:** A paleta `gip-blue` (Primary) e os tons neutros de Zinc foram mapeados do Figma para o `createTheme`. Isso automatizou os estados de *hover* e *active* de botões sem necessidade de CSS manual.
3.  **Otimização de Fontes e Assets:** A fonte oficial **Figtree** foi implementada via `next/font/google` para *self-hosting*, eliminando requisições externas e melhorando o Cumulative Layout Shift (CLS). Ícones simples (como a lupa) foram desenhados in-line em SVG para reduzir o *bundle size*.
4.  **Componentização Isolada:** Header e Footer foram extraídos para a pasta `/components` para garantir uma base de código limpa no `page.tsx` e facilitar a escalabilidade futura.

## Como rodar o projeto localmente

Siga os passos abaixo para testar a aplicação na sua máquina:

1. Clone o repositório

git clone [https://github.com/eduardoreex/gip-gestao-investimentos-pi.git](https://github.com/eduardoreex/gip-gestao-investimentos-pi.git)

2. Acesse a pasta do projeto
Bash
cd gip-gestao-investimentos-pi

3. Instale as dependências
Bash
npm install

4. Inicie o servidor de desenvolvimento
Bash
npm run 

5. Acesse no navegador
Abra http://localhost:3000 no seu navegador para ver o resultado.

Desenvolvido por Eduardo Oliveira.