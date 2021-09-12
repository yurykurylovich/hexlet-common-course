DROP TABLE IF EXISTS old_cars;
CREATE TABLE old_cars (
    model varchar(255), -- noqa: L029
    brand varchar(255),
    price integer,
    discount integer,
    PRIMARY KEY (model, brand)
);

INSERT INTO old_cars VALUES
    ('m5', 'bmw', 5500000, 5),
    ('x5m', 'bmw', 6000000, 5),
    ('m1', 'bmw', 2500000, 5),
    ('almera', 'nissan', 5500000, 10),
    ('gt-r', 'nissan', 5000000, 10);
