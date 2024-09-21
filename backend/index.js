const connectToMongo = require('./db');

connectToMongo()


const express = require('express')
const app = express()
const port = 5000


app.use(express.json())
//avaiable routes
// app.get('/', (req, res) => {
//   res.send('Hello Shivang!')
// })

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})