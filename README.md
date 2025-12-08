# Winove English Platform

Aplicação web para apresentação dos serviços de inglês da professora Carol Fava, com teste de nível automatizado e navegação otimizada.

## Como executar localmente

**Pré-requisitos:** Node.js

1. Instale as dependências:
   ```
   npm install
   ```
2. Configure a variável `GEMINI_API_KEY` em [.env.local](.env.local) com a chave da Winove AI (compatível com Gemini).
3. Execute o aplicativo:
   ```
   npm run dev
   ```

## Implantação

O projeto utiliza Vite com `HashRouter`, permitindo que as rotas funcionem corretamente mesmo em ambientes estáticos ou hospedagem compartilhada.
