# Basic Node.js API

A simple Express.js API built with TypeScript and Bun.

## Installation

```bash
bun install
```

## Running the API

```bash
bun run start
```

The server will start on port 3000 (or the PORT environment variable).

## API Endpoints

- `GET /` - Welcome message
- `GET /api/users` - Get list of users
- `POST /api/users` - Create a new user (expects JSON body)

## Example Usage

```bash
# Get welcome message
curl http://localhost:3000/

# Get users
curl http://localhost:3000/api/users

# Create user
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name": "New User"}'
```

This project was created using Bun. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
