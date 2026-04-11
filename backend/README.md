# Secure Cloud Landing Zone Backend

A Node.js/Express backend API for the Secure Cloud Landing Zone dashboard.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. For development with auto-restart:
   ```bash
   npm run dev
   ```

The server will run on port 3001 by default.

## API Endpoints

- `GET /api/violations` - Get all security violations
- `PATCH /api/violations` - Update violation status
- `GET /api/logs` - Get security logs
- `GET /api/stats` - Get dashboard statistics
- `GET /api/compliance` - Get compliance frameworks
- `POST /api/simulate` - Simulate a security violation
- `GET /health` - Health check

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=3001
```

## Integration

The frontend dashboard expects the backend to be running on the same domain or configure CORS accordingly.