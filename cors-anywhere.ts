/* eslint-disable no-console */
// Listen on a specific host via the HOST environment variable
const host = 'localhost'
// Listen on a specific port via the PORT environment variable
const port = 8080

const cors_proxy = require('cors-anywhere')
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function () {
    console.log(
      'Running CORS Anywhere on ' +
        host +
        ':' +
        port +
        ' - Now you can run `yarn web` command in a new terminal.'
    )
  })
