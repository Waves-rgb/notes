# WackNotes
A secure, privacy-oriented, web-based note-taking app.

## Features
* [Markdown](https://en.wikipedia.org/wiki/Markdown) support
* Encryption
* No personal information
* No tracking
* No ads
* Limited analytics (error reporting and visitor count)
* Open-source
* Free

## About
WackNotes is a secure, privacy-oriented, web-based, open-source note-taking app, made out of pure boredom and built with Next.js, React, and Node.js. It is still being polished.

Privacy is ensured due to the nature of the app's account system. The account system uses no personal information and simply contains a 16-digit ID code (e.g. `6001 0589 3872 0693`) paired with a 32-character encryption/decryption key, containing both uppercase, lowercase, special, and numeric characters. Both the ID and the key are generated randomly to prevent any vulnerability from poor passwords. The ID is used to identify the user, and the key is used to encrypt and decrypt the notes.

The security of WackNotes comes from the strong encryption and hashing methods in use. AES-256-CBC is used for encrypting the notes, and the encryption key is hashed with PBKDF2 and only accessed to verify the decryption key upon login. The key is salted with a 128-character salt. The salt, hash, and ID are the only things stored in the database, other than the users' encrypted notes. All encryption and decryption are done on the client side. The server is simply an intermediary between the client and the database.

WackNotes is completely free, open-source software that can be found on GitHub.