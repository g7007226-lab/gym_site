# --- Stage 1: Build Stage ---
FROM node:20-slim AS builder
WORKDIR /app

# Cache dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build the React app
COPY . .
RUN npm run build

# --- Stage 2: Production Serving Stage ---
FROM nginx:alpine
# Copy the compiled static assets from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
