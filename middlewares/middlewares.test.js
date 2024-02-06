const request = require('supertest')
const express = require('express')
const jwt = require('jsonwebtoken')
const { authenticateToken } = require('./middlewares')
const { Utils } = require('../utils')

const app = express()
app.use(authenticateToken)
app.get('/', (req, res) => res.sendStatus(200))

describe('authenticateToken', () => {
  it('should return 401 if no token is provided', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(401)
  })

  it('should return 403 if the token is invalid', async () => {
    const token = jwt.sign({ foo: 'bar' }, 'wrongSecret')
    const res = await request(app)
      .get('/')
      .set('Authorization', `Bearer ${token}`)
    expect(res.statusCode).toEqual(403)
  })

  it('should return 200 if the token is valid', async () => {
    const token = jwt.sign({ foo: 'bar' }, Utils.appSecret)
    const res = await request(app)
      .get('/')
      .set('Authorization', `Bearer ${token}`)
    expect(res.statusCode).toEqual(200)
  })
})
