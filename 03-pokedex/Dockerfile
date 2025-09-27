# Etapa 1: dependencias (incluye dev para poder compilar)
FROM node:18-alpine3.15 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

# Etapa 2: build
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Etapa 3: producción (solo dependencias necesarias + dist)
FROM node:18-alpine3.15 AS runner
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --frozen-lockfile

COPY --from=builder /app/dist ./dist

# 👇 importante: ejecutar el .js generado
CMD ["node", "dist/src/main.js"]
