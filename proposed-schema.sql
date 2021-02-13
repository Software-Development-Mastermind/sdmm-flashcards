CREATE TABLE users (
    id uuid DEFAULT generate_uuid_v4(),
    first_name varchar NOT NULL,
    last_name varchar NOT NULL,
    email varchar NOT NULL,
    password varchar NOT NULL,
    created_at timestampz NOT NULL DEFAULT NOW()
    PRIMARY KEY(id);
);

CREATE TABLE flashcard_categories (
    id uuid DEFAULT generate_uuid_v4();
);

CREATE TABLE flashcards (
    id uuid DEFAULT generate_uuid_v4();
    created_at timestampz NOT NULL DEFAULT NOW()
);