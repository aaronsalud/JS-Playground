BEGIN TRANSACTION;

CREATE TABLE users_images (
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
      REFERENCES users (id) ON DELETE CASCADE,
    image_id INT NOT NULL,
    FOREIGN KEY (image_id)
      REFERENCES images (id) ON DELETE CASCADE
);

COMMIT;