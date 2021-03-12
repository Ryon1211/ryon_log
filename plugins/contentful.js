const contentful = require('contentful');

const config = {
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_ACCESS_TOKEN
}

module.exports = {
  createClient() {
    return contentful.createClient(config);
  }
}