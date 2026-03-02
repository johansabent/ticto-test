# Multi-stage Next.js build for development

FROM node:22-alpine AS base
WORKDIR /app
RUN npm install -g npm@latest

# Build stage
FROM base AS builder
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install

COPY . .
RUN npm run build

# Development stage
FROM base AS development
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install

COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production stage (if needed)
FROM base AS production
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm install --omit=dev

COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD ["npm", "start"]
