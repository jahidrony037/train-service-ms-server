# train-service-ms-server

## Overview

This project is a backend system for managing train services, stations, user wallets, and ticketing. It is built using Node.js, Express, and MongoDB.

## Features

- User registration and login with JWT authentication
- Station management (create, update, retrieve)
- Train management with scheduling and stops
- Wallet integration for users
- Ticket purchasing system based on wallet balance

## For Runs Locally

1. Clone the repository:

   ```bash
   git clone git@github.com:jahidrony037/train-service-ms-server.git
   cd train-service-ms-server

   ```

2. Install dependencies:
   yarn
3. Configure environment variables:
   Create a .env file in the root directory and add the following:
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000

4. Start the Server
   yarn start
