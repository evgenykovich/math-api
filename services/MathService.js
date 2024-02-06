const { Utils } = require('../utils')

/**
 * Solve a math equation based on passed in parameters
 * Send 2 numbers and an action to perform on them
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Number} - The result of the math operation
 * */
const doMath = (req, res) => {
  const { num1, num2, action } = req.body

  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    !['add', 'subtract', 'multiply', 'divide'].includes(action)
  ) {
    return res.status(400).json({ error: 'Invalid input' })
  }

  const result = Utils.handleMath(num1, num2, action)

  res.json({ result })
}

module.exports = {
  doMath,
}
