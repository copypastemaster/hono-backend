import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./drizzle",
    schema: [], // List your schemas
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
