
-- Seed data with a fake user for testing

insert into users (name, email, entries, joined) values ('test', 'test@example.com', 5, '2021-01-01');
insert into login (hash, email) values ('$2a$10$SN8IexUztcPNfUolx9zRde1RlSep/cHouG7nn.WlqDpfnAEOFtVuq', 'test@example.com');