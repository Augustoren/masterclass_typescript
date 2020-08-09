import express from 'express'

const app = express()
app.use(express())

const PORT = 3333
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
