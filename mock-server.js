const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const PORT = 3000

server.use(middlewares)
server.use(jsonServer.bodyParser)

// Mock do endpoint de autenticação
server.post('/api/app/auth/login', (req, res) => {
  const { username, password } = req.body

  // Aceita qualquer login em ambiente de mock
  res.json({
    id: 1,
    username: username || 'admin',
    firstName: 'Admin',
    lastName: 'Mock',
    token: 'dev-mock-jwt-token-' + Date.now()
  })
})

server.use(router)

server.listen(PORT, () => {
  console.log(`Mock server rodando em http://localhost:${PORT}`)
  console.log(`  GET  /UserProfile`)
  console.log(`  GET  /users`)
  console.log(`  GET  /articles`)
  console.log(`  POST /api/app/auth/login`)
})
