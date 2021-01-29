BEGIN TRANSACTION;

CREATE TABLE users_images (
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
      REFERENCES users (id),
    image_id INT NOT NULL,
    FOREIGN KEY (image_id)
      REFERENCES images (id)
);

COMMIT;