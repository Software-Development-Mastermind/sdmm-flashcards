CREATE TABLE users (
    id uuid DEFAULT generate_uuid_v4(),
    first_name varchar NOT NULL,
    last_name varchar NOT NULL,
    email varchar NOT NULL,
    password varchar NOT NULL,
    created_at timestampz NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id);
);

CREATE TABLE flashcard_categories (
    id uuid DEFAULT generate_uuid_v4();
    name varchar NOT NULL,
    created_at timestampz NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id);
);

CREATE TABLE flashcards (
    id uuid DEFAULT generate_uuid_v4();
    question varchar NOT NULL,
    answer varchar NOT NULL,
    type varchar NOT NULL, -- thinking multiple choice vs. open-ended
    created_at timestampz NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id);
);

CREATE_TABLE flashcard_views (
    id uuid DEFAULT generate_uuid_v4(),
    user_id uuid REFERENCES users(id) NOT NULL,
    flashcard_id uuid REFERENCES flashcards(id) NOT NULL,
    result varchar NOT NULL,
    ip_address varchar, -- MAY BE OVERKILL HERE lol
    created_at timestampz NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id);
)