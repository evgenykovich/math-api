const request = require('supertest')
const express = require('express')
const { doMath } = require('./MathService')

const app = express()
app.use(express.json())
app.post('/doMath', doMath)

describe('doMath', () => {
  it('should return 400 if input is invalid', async () => {
    const res = await request(app)
      .post('/doMath')
      .send({ num1: 'invalid', num2: 2, action: 'add' })
    expect(res.statusCode).toEqual(400)
  })

  it('should return the result of adding two numbers', async () => {
    const res = await request(app)
      .post('/doMath')
      .send({ num1: 1, num2: 2, action: 'add' })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ result: 3 })
  })

  it('should return the result of subtracting two numbers', async () => {
    const res = await request(app)
      .post('/doMath')
      .send({ num1: 5, num2: 2, action: 'subtract' })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ result: 3 })
  })

  it('should return the result of multiplying two numbers', async () => {
    const res = await request(app)
      .post('/doMath')
      .send({ num1: 3, num2: 2, action: 'multiply' })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ result: 6 })
  })

  it('should return the result of dividing two numbers', async () => {
    const res = await request(app)
      .post('/doMath')
      .send({ num1: 6, num2: 2, action: 'divide' })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ result: 3 })
  })
})
