CREATE TABLE brands (
    id bigint PRIMARY KEY,
    name varchar(255), -- noqa: L029
    discount integer
);

CREATE TABLE cars (
    id bigint PRIMARY KEY,
    brand_id integer REFERENCES brands(id),
    model varchar(255), -- noqa: L029
    price integer
);

INSERT INTO brands VALUES (1, 'bmw', 5), (2, 'nissan', 10);

INSERT INTO cars VALUES
    (1, 1, 'm5', 5500000),
    (2, 1, 'x5m', 6000000),
    (3, 1, 'm1', 2500000),
    (4, 2, 'gt-r', 5000000),
    (5, 2, 'almera', 5500000);
