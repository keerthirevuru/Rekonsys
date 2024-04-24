const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Users = require("./models/User")
//const userRouter = require('./routes/CreateUser');

const app = express();
const port = 5000;

const mongoURI = 'mongodb+srv://keerthi:5qH58w6UqBI0Hj9D@cluster0.7gsft1q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
//app.use('/', userRouter);

app.get('/users',async (req, res) => {
    //res.send('hello world!!');
    const events = await Users.find();

    res.json(events);
  
  
});
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await Users.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        const newUser = new Users({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Server error' });
    }
    //console.log(req.body)
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password)

    try {
        const users = await Users.findOne({ email });
        if (!users) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the password provided with the password stored in the database
        if (users.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', users });
    } catch (err) {
        console.error('Error logging in user:', err);
        res.status(500).json({ message: 'Server error' });
    }
});









app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});