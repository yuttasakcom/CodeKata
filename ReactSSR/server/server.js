import express from 'express'
import path from 'path'
const app = express()
const port = process.env.PORT || 3000

import renderer from './renderer'

app.use(express.static('public'))
app.use('/', (req, res) => {
  res.send(renderer())
})

app.listen(port, err => {
  if (err) throw err

  console.log(`Server running at port:${port}`)
})