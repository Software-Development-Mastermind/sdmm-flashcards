CREATE TABLE users (
    id uuid DEFAULT generate_uuid_v4(),
    first_name varchar NOT NULL,
    last_name varchar NOT NULL,
    email varchar NOT NULL,
    password varchar NOT NULL,
    created_at timestampz NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id);
);

CREATE TABLE categories (
    id uuid DEFAULT generate_uuid_v4();
    name varchar NOT NULL,
    created_at timestampz NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id);
);

CREATE TABLE subcategories (
    id uuid DEFAULT generate_uuid_v4();
    category_id uuid REFERENCES categories(id) NOT NULL,
    name varchar NOT NULL,
    created_at timestampz NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id);
);

CREATE TABLE subcategory_users (
    id uuid NOT NULL DEFAULT generate_uuid_v4(),
    subcategory_id uuid REFERENCES subcategories(id) NOT NULL,
    user_id uuid REFERENCES users (id) NOT NULL,
    created_at timestampz NOT NULL DEFAULT NOW(),
    assigned_by_user_id uuid REFERENCES user(id) NOT NULL,
    PRIMARY KEY(id);
);

CREATE TABLE flashcards (
    id uuid DEFAULT generate_uuid_v4(),
    subcategory_id uuid REFERENCES subcategories(id) NOT NULL,
    question varchar NOT NULL,
    answer varchar NOT NULL,
    type varchar NOT NULL, -- thinking multiple choice vs. open-ended
    owner_id uuid REFERENCES user(id) NULL,
    created_by_user_id uuid REFERENCES user(id) NOT NULL,
    created_at timestampz NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id);
);

CREATE TABLE flashcard_views (
    id uuid DEFAULT generate_uuid_v4(),
    user_id uuid REFERENCES users(id) NOT NULL,
    flashcard_id uuid REFERENCES flashcards(id) NOT NULL,
    result varchar NOT NULL,
    ip_address varchar, -- MAY BE OVERKILL HERE lol
    created_at timestampz NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id);
)