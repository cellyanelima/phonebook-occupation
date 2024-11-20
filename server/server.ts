import express from 'express'
import * as Path from 'node:path'

import contactRoutes from './routes/contacts.ts'
import occupationRoutes from './routes/occupations.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/contacts', contactRoutes)
server.use('/api/v1/occupations', occupationRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
