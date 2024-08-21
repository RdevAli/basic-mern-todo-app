const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo');
const cors=require('cors')



const app = express();
app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb://localhost/todo-app', { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/api/todos', todoRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
