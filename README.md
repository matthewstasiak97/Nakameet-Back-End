# Nakameet

Find and create events that build real community.

## About

Nakameet is an event management platform designed to help users discover, organize, and share local events easily. Whether it's a meetup, a workshop, or a social gathering, Nakameet helps communities grow stronger.

## Features

- RESTful API for event management
- User authentication and authorization
- Event CRUD operations
- Category management
- Search and filtering capabilities
- Secure data handling

## Tech Stack

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express Validator


## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Nakameet-Back-End.git
   cd Nakameet-Back-End
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify user token

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get a specific event
- `POST /api/events` - Create a new event
- `PUT /api/events/:id` - Update an event
- `DELETE /api/events/:id` - Delete an event

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get a specific category

## Data Models

### User
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Event
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  date_time: Date,
  location: String,
  category: String,
  user_id: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

## Error Handling

The API uses standard HTTP status codes and returns errors in the following format:
```javascript
{
  "error": {
    "message": "Error message",
    "status": 400
  }
}
```
## Security

- Password hashing using bcrypt
- JWT-based authentication
- Input validation and sanitization
- CORS configuration
- Rate limiting
- Helmet for security headers

### Resources and Tools
- Node.js – JavaScript runtime for building scalable server-side applications

- Express.js – Minimalist web framework for creating robust APIs

- MongoDB – NoSQL database for storing flexible event and user data

- Postman – API client for testing and documenting RESTful endpoints

- ChatGPT – AI assistant for debugging, documentation, and code generation

- Tailwind CSS – Utility-first CSS framework (used primarily on the frontend but critical for full-stack project integration)

- Stack Overflow – Community-driven Q&A platform for solving development issues in real-time

## Collaborators
- Bonnie Francis
- Cartez Dewberry
- Matthew Stasiak
- Camie Gray