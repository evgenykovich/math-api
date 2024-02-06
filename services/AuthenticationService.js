const jwt = require('jsonwebtoken')
const { Utils } = require('../utils')
/**
 * get auth token
 * generate a jwt token
 *
 * returns String
 * */
const login = (req, res) => {
  const username = 'user'
  const user = { username: username }

  const accessToken = jwt.sign(user, Utils.appSecret, {
    expiresIn: '15m',
  })
  res.json({ accessToken: accessToken })
}

module.exports = {
  login,
}
