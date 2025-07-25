var express = require('express');
var sqlite3 = require('sqlite3');
var bcrypt = require('bcryptjs');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var app = express();
var PORT = 4000;
var SECRET = 'your_jwt_secret'; // Change this in production
app.use(cors());
app.use(express.json());
// Initialize SQLite database
var db = new sqlite3.Database('./users.db', function (err) {
    if (err) {
        console.error('Could not connect to database', err);
    }
    else {
        console.log('Connected to SQLite database');
    }
});
// Create users table if it doesn't exist
var createTable = "\nCREATE TABLE IF NOT EXISTS users (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  username TEXT UNIQUE,\n  password TEXT\n);\n";
db.run(createTable);
// Signup endpoint
app.post('/signup', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password required' });
    }
    var hashedPassword = bcrypt.hashSync(password, 10);
    var stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    stmt.run(username, hashedPassword, function (err) {
        if (err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
                return res.status(409).json({ message: 'Username already exists' });
            }
            return res.status(500).json({ message: 'Database error' });
        }
        res.status(201).json({ id: this.lastID, username: username });
    });
});
// Login endpoint
app.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password required' });
    }
    db.get('SELECT * FROM users WHERE username = ?', [username], function (err, user) {
        if (err)
            return res.status(500).json({ message: 'Database error' });
        if (!user)
            return res.status(401).json({ message: 'Invalid credentials' });
        // Add this line:
        var typedUser = user;
        var valid = bcrypt.compareSync(password, typedUser.password);
        if (!valid)
            return res.status(401).json({ message: 'Invalid credentials' });
        // Generate JWT
        var token = jwt.sign({ id: typedUser.id, username: typedUser.username }, SECRET, { expiresIn: '1h' });
        res.json({ token: token, username: typedUser.username, id: typedUser.id });
    });
});
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
