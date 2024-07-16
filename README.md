# Datasphere Server

## Overview

The Datasphere Server is designed to centralize and manage data across various applications and services within our ecosystem. It acts as a hub for data storage, processing, and distribution, ensuring seamless integration and efficient data management.

## Features

- **Data Integration:** Integrates data from multiple sources, providing a unified view.
  
- **Data Storage:** Utilizes scalable storage solutions to accommodate large volumes of structured and unstructured data.
  
- **Data Processing:** Implements processing pipelines for transforming and analyzing data in real-time or batch modes.
  
- **Data Security:** Ensures data integrity and security through encryption of passwords to protect against hackers, and uses JWT authentication for secure API access.
  
- **API Integration:** Provides APIs for seamless integration with external applications and services, handling various types of requests.
  
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
curl -X GET http://localhost:3000/data
