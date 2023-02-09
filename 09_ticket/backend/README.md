# concurrently

npm run dev

#### package.json

```json
  "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\" "
  }
```

# colors

#### server.js

起動時に読み込めば、他の場所でも使えるようになる。

```javascript
const colors = require('colors');
```

#### db.js

```javascript
console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
```

# dotenv

#### server.js

起動時に読み込めば、他の場所でも使えるようになる。

```javascript
const dotenv = require('dotenv').config();
```

#### db.js

```javascript
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
```
