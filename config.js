const path = require('path')

const config = {
  ROOT_DIR: __dirname,
  URL_PORT: 8080,
  URL_PATH: 'https://virtserver.swaggerhub.com',
  BASE_VERSION: '/EVGENYKOVICH_1/Math/1.0.0',
  CONTROLLER_DIRECTORY: path.join(__dirname, 'controllers'),
  PROJECT_DIR: __dirname,
}
config.OPENAPI_YAML = path.join(config.ROOT_DIR, 'api', 'openapi.yaml')
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`

module.exports = config
