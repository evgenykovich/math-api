const { handleMath } = require('./utils')

describe('handleMath', () => {
  it('should correctly add two numbers', () => {
    expect(handleMath(1, 2, 'add')).toBe(3)
  })

  it('should correctly subtract two numbers', () => {
    expect(handleMath(5, 2, 'subtract')).toBe(3)
  })

  it('should correctly multiply two numbers', () => {
    expect(handleMath(3, 2, 'multiply')).toBe(6)
  })

  it('should correctly divide two numbers', () => {
    expect(handleMath(6, 2, 'divide')).toBe(3)
  })

  it('should throw an error for an invalid action', () => {
    expect(() => handleMath(1, 2, 'invalid')).toThrow('Invalid action')
  })
})
