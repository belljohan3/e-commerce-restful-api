// Express
const express = require('express')
const app = express();
const port = 3001;

app.use(express.json());

// Users routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);


app.get('/', (req, res) =>{
  res.send('Tu es perdu mon ami ???')
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});