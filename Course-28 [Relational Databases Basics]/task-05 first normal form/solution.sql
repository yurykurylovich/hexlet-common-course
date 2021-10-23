CREATE TABLE users (
    id bigint PRIMARY KEY,
    first_name varchar(255),
    created_at timestamp
);

CREATE TABLE orders (
    id bigint PRIMARY KEY,
    user_first_name varchar(255),
    months integer,
    created_at timestamp
);

INSERT INTO users VALUES (1, 'Tom', '1832-11-23');

INSERT INTO orders VALUES (1, 'Tom', 3, '2012-10-1');
INSERT INTO orders VALUES (2, 'Tom', 3, '2012-10-1');
