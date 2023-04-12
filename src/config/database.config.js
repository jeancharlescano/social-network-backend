import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "social-network",
  password: "password",
  port: 5432,
});

pool.connect;
