# Provador IA — Landing Page

Landing page profissional e pronta para conversão para o serviço **Provador IA**.

## O que está incluído

- Página completa (Hero, Problema, Solução, Como Funciona, Antes/Depois, Preços, Prova Social, FAQ, CTAs)
- Design clean e minimalista (preto + rosa suave #9C82E3)
- Totalmente responsiva (mobile first)
- Interações prontas:
  - Modal de "Amostra Grátis" com redirecionamento automático para WhatsApp
  - FAQ em acordeão
  - Menu mobile
  - Botões de seleção de pacote que preenchem o modal
- Imagens placeholder de alta qualidade (substitua por fotos reais geradas)

## Como usar / Personalizar

### 1. Número de WhatsApp (importante)

Abra o arquivo `index.html` e procure por esta linha:

```js
const phone = "5515992707314"; // ⚠️ ALTERE AQUI PARA O NÚMERO DE WHATSAPP REAL
```

Substitua pelo número correto (formato internacional sem + ou espaços).

### 2. Trocar as imagens (Antes × Depois)

As imagens atuais usam Picsum (placeholder). Recomendamos fortemente substituir pelas fotos reais geradas com o serviço.

Procure por:
- `https://picsum.photos/id/1011/800/600` → Foto "ANTES"
- `https://picsum.photos/id/1005/800/600` → Foto "DEPOIS"

**Dica:** Crie uma pasta `/assets` e use caminhos relativos.

### 3. Cores e identidade visual

A cor principal está definida em duas formas:
- Classe Tailwind `accent-bg` → cor rosa `#9C82E3`
- No `<style>` há a variável `--accent`

Para mudar a cor principal, basta alterar o valor hexadecimal em:
- Linha do script Tailwind (se precisar)
- Classes `accent-bg` e `text-[#9C82E3]`

### 4. Textos e pacotes

Todos os textos estão diretamente no HTML. É fácil editar.

Os preços estão alinhados com a documentação atual (START, VITRINE, ESSENCIAL, PREMIUM).

## Hospedagem recomendada (rápida e grátis)

### Opção mais simples (Netlify)
1. Arraste a pasta inteira `provador-ia-landing` para [netlify.com/drop](https://app.netlify.com/drop)
2. Pronto. Você recebe um link `.netlify.app`

### Vercel
1. Conecte o repositório no Vercel ou faça deploy via CLI
2. Excelente performance

### GitHub Pages
- Crie um repositório → Settings → Pages → Deploy from branch `main`

## Assets Locais (Imagens e Vídeos)

A landing page agora usa arquivos locais em `assets/images/` e `assets/videos/`.

**Imagens incluídas (17 fotos):**
- Pares Antes × Depois prontos para a seção principal
- Galeria de exemplos variados (linho, alfaiataria, lifestyle etc.)

**Vídeos (3 demos):**
- `assets/videos/1.mp4` (8s)
- `assets/videos/2.mp4` (10s)
- `assets/videos/3.mp4`

**Importante:**  
Esses são arquivos demonstrativos gerados para ilustrar o projeto.  
O ideal é substituir tudo por fotos e vídeos **reais** gerados com o Provador IA para clientes de verdade (com pares antes/depois da mesma peça). Isso aumenta muito a conversão.

Para gerar novos conteúdos e atualizar:
1. Use as ferramentas de geração
2. Copie para `assets/images` e `assets/videos`
3. Atualize os caminhos no `index.html` (ou me avise que eu faço)

## Próximos passos recomendados (para aumentar conversão)

- [ ] Substituir imagens da seção "Exemplos" por fotos reais geradas com o Provador IA (antes/depois da mesma peça)
- [ ] Adicionar 2–3 depoimentos reais de lojas (com foto e @ do Instagram)
- [ ] Criar portfólio em página separada ou seção dedicada
- [ ] Colocar pixel do Meta + Google Analytics
- [ ] Conectar o formulário de amostra para Google Sheets ou CRM (opcional)
- [ ] Comprar domínio (ex: provadoria.com.br ou vitriniapro.com.br)

## Desenvolvimento (Vite + Tailwind v4)

O projeto agora usa um build pipeline moderno:

```bash
npm install          # uma única vez
npm run dev          # servidor de desenvolvimento com HMR
npm run build        # gera a pasta dist/ pronta para deploy
npm run preview      # testa o build localmente
```

A pasta `dist/` é o que você sobe no Netlify / Vercel / GitHub Pages.

**Não use mais o CDN do Tailwind** — ele foi removido. Todo o CSS está em `src/main.css` e é processado pelo Vite.

## Estrutura de arquivos

```
provador-ia-landing/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   └── main.css          ← Todo o Tailwind + estilos custom
├── assets/
├── dist/                 ← Gerado pelo `npm run build`
└── README.md
```

## Contato / Dúvidas

Qualquer ajuste de texto, preço, cor ou estrutura, é só pedir.

---

**Status:** Pronta para uso / lançamento  
**Versão:** 1.0 (seguindo estrutura definida em ideia.md)