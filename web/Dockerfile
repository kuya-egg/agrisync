FROM oven/bun:latest AS builder

WORKDIR /app

COPY . .

RUN bun i --frozen-lockfile
RUN bun run build

FROM oven/bun:latest

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY package.json bun.lock ./
RUN bun i --frozen-lockfile --production

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["bun", "run", "start"]
