# ==========================================
# Estágio 1: Build da SPA (React + Vite)
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# ==========================================
# Estágio 2: Servidor de Produção (Nginx)
# ==========================================
FROM nginx:1.27-alpine AS production

# Remove configuração padrão e adiciona a nossa otimizada para SPA
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos compilados no estágio de build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
