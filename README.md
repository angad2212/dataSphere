# Datasphere Server

## Overview

The Datasphere Server is designed to centralize and manage data across various applications and services within our ecosystem. It acts as a hub for data storage, processing, and distribution, ensuring seamless integration and efficient data management.

## Features

- **Data Integration:** Integrates data from multiple sources, providing a unified view.
  
- **Data Storage:** Utilizes perfect storage solutions for the users and the posts because of flexible MongoDB schema.
  
- **Data Security:** Ensures data integrity and security through encryption of passwords to protect against hackers, and uses JWT authentication for secure API access.
  
- **File Handling:** Utilizes Multer middleware for handling file uploads.
  
- **HTTP Security:** Implements Helmet middleware to secure HTTP headers against common vulnerabilities.

## Usage

### API Endpoints

- **GET /users/:id**: retrieves users from the database.
- **POST /auth**: handle authentication.
- **PUT /users/:id/:friendId**: gets a user along with a friend from the database.
- **DELETE /auth/login**: handles existing users logging in.

### Example

```bash
curl -X GET http://localhost:3001/users/6693ac075c33537c5b42e45b
