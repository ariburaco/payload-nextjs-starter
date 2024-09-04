import { createClient } from "@libsql/client";

const libsql = createClient({
  url: "file:./database/replica.db",
  syncUrl: process.env.DATABASE_URL ?? "",
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export default libsql;
