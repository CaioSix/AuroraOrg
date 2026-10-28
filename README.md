# AuroraOrg — Catálogo de Soluções & Engenharia de Software (Aurora)

Plataforma oficial de catálogo interativo e consultoria de arquitetura da **Aurora**, uma Software House liderada por engenharia sênior e práticas de **SRE (Site Reliability Engineering)**.

O objetivo do projeto é apresentar, de forma clara e sem "tecniquês", soluções tecnológicas sob medida para negócios locais e redes — desde **SPAs (Single Page Applications)** ultrarrápidas até sistemas completos em **Cloud (Nuvem)** e infraestruturas críticas **On-Premise (Servidor Local / Offline-First)**.

---

## Principais Funcionalidades

1. **Catálogo Interativo por Nicho de Negócio**:
   - **Barbearia & Salão** (Agendamento rápido, clube de assinatura, comissões)
   - **Estúdio de Tatuagem** (Portfólio filtrável, simulador de orçamento, anamnese digital)
   - **Padaria, Mercado & Varejo** (Encarte digital, ERP em nuvem, frente de caixa PDV On-Premise 100% offline-first)
   - **Academia, CrossFit & Studio** (App de treinos, cobrança recorrente, integração local com catracas biométricas/faciais)
   - **Clínica, Estética & Odonto** (Catálogo de protocolos, prontuário eletrônico LGPD, controle de pacotes de sessões)
   - **Restaurante, Burger & Delivery** (Cardápio próprio sem taxas, KDS na cozinha e gestão integrada)

2. **Páginas de Demonstração Reais (SPAs em HTML/CSS/JS Puro & Projetos Integrados)**:
   - `/demos/barbearia/` — **Royal Blade Barber** (SPA moderna com agendamento e tabela de serviços)
   - `/demos/tattoo/` — **Black Ink Tattoo Studio** (SPA com portfólio de artistas e simulador de briefing)
   - `/demos/padaria/` — **Grão & Forno Boulangerie** (SPA de padaria artesanal com reserva de fornadas e cestas)
   - `/demos/clinica/` — **Lumina Estética Avançada** (SPA de clínica estética com protocolos e avaliação)
   - **Restaurante & Cozinha Integrado**: [No Preparo (`https://nopreparo.duckdns.org/`)](https://nopreparo.duckdns.org/)

3. **Guia Didático Interativo de Arquiteturas (SPA vs. Cloud vs. On-Premise)**:
   - **Simulador de Velocidade SPA vs. Site Tradicional**: Demonstra na prática a navegação instantânea sem recarregar páginas.
   - **Simulador SRE de Queda de Internet**: Mostra como o modelo **On-Premise**, **Cloud** e **SPA** se comportam caso a fibra óptica da rua seja rompida.

4. **Diagnóstico / Quiz de Arquitetura**:
   - Algoritmo interativo que recomenda em 4 perguntas qual arquitetura (**SPA**, **Cloud** ou **On-Premise**) oferece o melhor retorno para a operação do cliente, com envio direto para o WhatsApp.

---

## Stack Tecnológica

- **Catálogo Principal**: React 18, Vite 6, Tailwind CSS 3, Lucide Icons
- **Demos Independentes (`/demos/*`)**: HTML5, CSS3 e JavaScript Vanilla (empacotados automaticamente pelo plugin customizado `auroraDemosPlugin` no `vite.config.js`)
- **Infraestrutura & Produção**: Docker Multi-Stage Build (`node:22-alpine` + `nginx:1.27-alpine` com Gzip, cache de assets e Healthcheck `/healthz`) + `docker-compose.yml` integrado ao **Cloudflare Tunnel (`cloudflared`)**

---

## Estrutura de Pastas

```text
.
├── demos/                     # Páginas SPA de demonstração em HTML/CSS/JS puro
│   ├── barbearia/             # Demo Royal Blade Barber
│   ├── tattoo/                # Demo Black Ink Tattoo Studio
│   ├── padaria/               # Demo Grão & Forno Boulangerie
│   └── clinica/               # Demo Lumina Estética Avançada
├── src/
│   ├── components/
│   │   ├── NicheCatalog.jsx          # Catálogo filtrável por segmento e porte
│   │   ├── ArchitectureExplainer.jsx # Explicação didática + Simuladores SRE/SPA
│   │   └── ArchitectureQuiz.jsx      # Quiz de diagnóstico de arquitetura
│   ├── data/
│   │   └── catalogData.js            # Dados de nichos, arquiteturas e comparativos
│   ├── App.jsx                       # Layout principal Aurora
│   └── main.jsx                      # Ponto de entrada React
├── Dockerfile                 # Build multi-stage (Node 22 -> Nginx 1.27 Alpine)
├── docker-compose.yml         # Orquestração Web + Cloudflare Tunnel
├── nginx.conf                 # Configuração Nginx (SPA + rota /demos/ + /healthz)
└── vite.config.js             # Configuração Vite + plugin para servir/copiar /demos
```

---

## Como Executar o Projeto

### Opção 1: Rodando com Docker Compose + Cloudflare Tunnel (Recomendado)

```bash
docker compose up -d --build
```

- **Acesso Local**: `http://localhost:8080`
- **Ver Link Público HTTPS gerado pelo Cloudflare Tunnel**:
  ```bash
  docker logs catalogo-tunnel | grep trycloudflare.com
  ```

### Opção 2: Rodando Localmente em Modo Desenvolvimento (Node.js)

```bash
npm install
npm run dev
```

---

## Como Adicionar Novas Demos em HTML/CSS/JS

1. Crie uma nova pasta dentro de `demos/<nome-do-nicho>/` contendo `index.html`, `style.css` e `script.js`.
2. Aponte a propriedade `demoUrl: '/demos/<nome-do-nicho>/index.html'` no segmento desejado em `src/data/catalogData.js`.
3. Execute `docker compose up -d --build catalogo-web`.
