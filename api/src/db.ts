import pg from "pg";
import { migrate } from "postgres-migrations";

let client: pg.Client;

// Use a self-invoking async function to connect to the database and run migrations
(async function () {
  const newClient = new pg.Client({
    user: "admin",
    password: "admin",
    host: "localhost",
    database: "fixer-upper",
  });
  await newClient.connect();
  await migrate({ client: newClient }, "./migrations");
  console.log("Database migration completed successfully.");
  client = newClient;
})();

export default function connect() {
  return client;
}
