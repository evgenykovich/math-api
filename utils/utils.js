const appSecret = 'secret_key'

const handleMath = (a, b, operator) => {
  switch (operator) {
    case 'add':
      return a + b
    case 'subtract':
      return a - b
    case 'multiply':
      return a * b
    case 'divide':
      return a / b
    default:
      throw new Error('Invalid action')
  }
}

module.exports = {
  handleMath,
  appSecret,
}
