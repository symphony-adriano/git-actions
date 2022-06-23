import express from 'express'

const PORT = 3000

const app = express()

app.get('/hello', (_req, res) => {
  res.send('hello world');
})

app.listen(PORT, () => {
  // console.log('Server is Running!');
})
