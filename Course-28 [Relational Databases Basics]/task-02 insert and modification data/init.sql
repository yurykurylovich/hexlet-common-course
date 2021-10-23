DROP TABLE IF EXISTS users;
CREATE TABLE users (
    first_name varchar(255),
    email varchar(255),
    manager boolean
);

INSERT INTO users (first_name, email) VALUES
('Sansa', 'sansa@winter.com'),
('Tirion', 'tirion@got.com');
