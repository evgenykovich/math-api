/**
 * This module exports the authenticateToken middleware.
 * @module middlewares
 */

const jwt = require('jsonwebtoken')
const { Utils } = require('../utils')

/**
 * Middleware function to authenticate a JWT token.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, Utils.appSecret, (err) => {
    if (err) return res.sendStatus(403)
    next()
  })
}

module.exports = {
  authenticateToken,
}
