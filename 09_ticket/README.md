# Ticket

## backend

#### .env

.env に下記 4 つを定義する。

```
NODE_ENV = development
PORT = 5000
MONGO_URI=
JWT_SECRET =
```

#### DB

- Express
- MongoDB Atlas
- JWT
- concurrently

```
  "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\" "
  },
```

## [frontend](https://github.com/boston-terrier-kirin/react/tree/main/09_ticket/frontend)

- @reduxjs/toolkit
- react-router-dom
- react-icons
- react-modal
- react-toastify
