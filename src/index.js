import express from 'express'

const app = express()

app.get('/hello', (_req, res) => {
  res.send('hello world');
})

app.listen(3000, () => {
  // le regole sono cosi
  // e' la vita ed e' ora che cresci
  // console.log('Server is Running!');
})
