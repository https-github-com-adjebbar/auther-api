const router = require('express').Router()

const localRoutes = require('./local/localAuth.routes')

const routes = passport => {
  router.use('/local', localRoutes(passport))

  return router
}

module.exports = routes
