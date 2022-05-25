// Express
const express = require('express')
const app = express()
const port = 3000

// connect Postgres to Node
// const { Client } = require('pg')
// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'root',
//   port: 5432,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });


app.get('/', (req, res) => {
  res.send('Get smthg...')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

