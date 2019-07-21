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
