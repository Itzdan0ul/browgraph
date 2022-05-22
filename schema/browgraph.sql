-- Browgraph databas (Schema) --

-- Create tables

CREATE TABLE IF NOT EXISTS category (
    id INTEGER NOT NULL,
    name TEXT NOT NULL UNIQUE,
    created_at DATE DEFAULT (DATETIME('now', 'localtime')),
    CONSTRAINT category_id_pk PRIMARY KEY(id),
    CONSTRAINT category_name_uk UNIQUE(name)
);

CREATE TABLE IF NOT EXISTS material (
    id INTEGER NOT NULL,
    folio TEXT NOT NULL,
    publisher TEXT NOT NULL,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    category_id INTEGER NULL,
    created_at DATE DEFAULT (DATETIME('now', 'localtime')),
    updated_at DATE NULL,
    CONSTRAINT material_id_pk PRIMARY KEY(id),
    CONSTRAINT material_category_id_fk FOREIGN KEY(category_id) 
        REFERENCES category(id) ON UPDATE CASCADE ON DELETE CASCADE
);