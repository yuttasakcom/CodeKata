import express from 'express'
import renderer from './renderer'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.get('*', (req, res) => {
  res.send(renderer(req))
})

app.listen(port, err => {
  if (err) throw err

  console.log(`Server running at port:${port}`)
})