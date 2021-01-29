-- Deploy fresh database tables:
\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/images.sql'
\i '/docker-entrypoint-initdb.d/tables/users_images.sql'

-- For testing purposes only. This file will add dummy data
\i '/docker-entrypoint-initdb.d/seed/seed.sql'