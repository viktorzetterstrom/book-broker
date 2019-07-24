DROP TABLE IF EXISTS "message";
DROP TABLE IF EXISTS "pinned_trade";
DROP TABLE IF EXISTS "trade";
DROP TABLE IF EXISTS "user";

CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  email VARCHAR UNIQUE,
  password VARCHAR
);

CREATE TABLE "trade" (
  id SERIAL PRIMARY KEY,
  goodreads_book_id INTEGER,
  goodreads_author_id INTEGER,
  book_title VARCHAR,
  book_author VARCHAR,
  book_publication_year INTEGER,
  book_rating FLOAT,
  book_image VARCHAR,
  trade_description VARCHAR,
  book_condition VARCHAR,
  owner_id INTEGER,
  trade_status BOOLEAN DEFAULT false,
  FOREIGN KEY (owner_id) REFERENCES "user"(id)
);

CREATE TABLE "message" (
  id SERIAL PRIMARY KEY,
  message VARCHAR,
  trade_id INTEGER,
  user_id INTEGER,
  timestamp timestamp default current_timestamp,
  FOREIGN KEY (trade_id) REFERENCES "trade"(id),
  FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TABLE "pinned_trade" (
  id SERIAL PRIMARY KEY,
  trade_id INTEGER,
  user_id INTEGER,
  FOREIGN KEY (trade_id) REFERENCES "trade"(id),
  FOREIGN KEY (user_id) REFERENCES "user"(id)
);
