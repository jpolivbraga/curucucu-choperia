# Curucucu — Hub Digital

Landing page estilo Linktree Premium para a Curucucu, construída com React + Vite + Tailwind CSS. Sem banco de dados, sem painel administrativo — todo o conteúdo vive em um único arquivo de configuração.

## Editar conteúdo

Tudo (nome, descrição, horários, WhatsApp, Instagram, Maps, PDFs, galeria, YT Music, IDs de analytics) é editado em:

```
src/config/breweryConfig.js
```

Substitua também os arquivos descritos em `public/ASSETS-PENDENTES.md` (logo, ícones dos botões, fotos, PDFs, imagem de compartilhamento).

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

O build é gerado em `dist/`.

## Deploy

Funciona out-of-the-box em:

- **Vercel**: importe o repositório, framework preset "Vite", sem configuração extra.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: rode `npm run build` e publique o conteúdo de `dist/` (ajuste `base` no `vite.config.js` se o site não estiver na raiz do domínio).

## Stack

- React 18 + Vite
- Tailwind CSS (paleta da marca configurada em `tailwind.config.js`)
- Framer Motion (microinterações)
- vite-plugin-pwa (instalável, funciona offline para o shell da página)
- qrcode.react (QR Code gerado localmente, sem API externa)

## Funcionalidades incluídas

- Status aberto/fechado calculado automaticamente a partir do horário configurado
- Botões principais: Cardápio (PDF), Quem Somos (PDF), WhatsApp, Localização (Maps), Instagram — com ícones próprios configuráveis em `public/icons/acoes/`
- Avaliações no Google, playlist no YT Music, compartilhar (Web Share API com fallback de copiar link), QR Code
- Galeria com lazy loading e scroll horizontal
- Modo claro/escuro (claro é o padrão), preferência salva no navegador
- Banner de instalação do PWA ("Adicionar à tela inicial")
- SEO completo: meta tags, Open Graph, Twitter Cards, Schema.org (BarOrPub), sitemap.xml, robots.txt
- Acessibilidade: foco visível, `aria-label`s, contraste AA, respeita `prefers-reduced-motion`
- Suporte pronto para Google Analytics e Meta Pixel (basta preencher os IDs em `breweryConfig.js`)

## Atenção antes do deploy público

O arquivo `src/config/breweryConfig.js` contém dados reais do estabelecimento (WhatsApp, link do Google Maps). Se for subir o código para um repositório público no GitHub, considere marcá-lo como **Private** caso prefira manter esses dados fora de visualização pública — a Vercel e a Netlify funcionam normalmente com repositórios privados.
