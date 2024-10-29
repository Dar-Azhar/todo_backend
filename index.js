const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const http = require('http');


// options 
const app = express();
app.use(express.json());
dotenv.config();
const corsOptions = {
    origin: '*', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads/images', express.static('uploads/images'));
app.use('/public', express.static(path.join(__dirname, 'public')));




// Routes
const todoRoute = require('./routes/todoRoute')



// route urls
app.use('/api/todo', todoRoute)


app.get('/', (req, res) => res.send("Hello World"));

// MongoDB connection
 const dbUsername = process.env.DB_USERNAME;
 const dbPassword = process.env.DB_PASSWORD;
const url = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.odtes.mongodb.net/`
const port = process.env.PORT || 8000;
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 30000,
	socketTimeoutMS: 45000
}).then(() => {
	console.log('MongoDB connected')
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
 }).catch(err => console.log(err));


