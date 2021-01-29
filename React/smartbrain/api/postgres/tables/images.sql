BEGIN TRANSACTION;

CREATE TABLE images (
    id serial PRIMARY KEY,
    url TEXT,
    analysis_results json NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

COMMIT;