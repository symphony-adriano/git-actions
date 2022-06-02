import express from 'express'

const app = express()

app.get('/hello', (_req, res) => {
  res.send('hello world');
})

app.listen(3000, () => {
  // forbidden log
  console.log('Server is Running!');
})
