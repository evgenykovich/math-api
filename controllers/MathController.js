/**
 * The MathController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 */

const { MathService } = require('../services')
const doMath = (request, response) => {
  MathService.doMath(request, response)
}

module.exports = {
  doMath,
}
