/**
 * The AuthenticationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 */

const { AuthenticationService } = require('../services')
const login = (req, res) => {
  AuthenticationService.login(req, res)
}

module.exports = {
  login,
}
