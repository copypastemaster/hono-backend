# Hono backend starter template

This is a basic backend template that has sufficient needs to start a project right away.

It handles the basic needs to start a backend (database setup, some configs, file structures) so you can start writing the logics right away without the need of configuring and setting things up initially.

### This project uses:
- hono
- bun
- drizzle ORM
- PostgreSQL

### NOTE: This is not configured for cloudflare-workers

### Pre-requisites:
- docker
- node LTS
- bun

To install dependencies:
```sh
bun install
```

Initialize db:
```
bun run start:db
bun run migrate
bun run seed
```
The previous step would initialize, migrate, and seed the database with pre-configure test users.

To run:
```sh
bun run dev
```

open http://localhost:3000
