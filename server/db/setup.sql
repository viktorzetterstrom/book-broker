DROP TABLE IF EXISTS "user";

CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  username VARCHAR,
  email VARCHAR,
  password VARCHAR
);
