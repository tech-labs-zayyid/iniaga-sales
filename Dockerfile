# 🔹 Stage 1: Build Stage
FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY . .
RUN npm run build  # Hasil build ada di /app/.next

# 🔹 Stage 2: Runtime Stage
FROM node:18-alpine
WORKDIR /root/frontend/

# Copy hanya hasil build
COPY --from=builder /app/.next .next
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules

CMD ["npm", "start"]

EXPOSE 3000
