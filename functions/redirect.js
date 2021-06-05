exports.handler = async event => {
  return {
    statusCode: 301,
    headers: {
      location: decodeURIComponent(event.queryStringParameters.url.replace(/\+/g, '%20'))
    }
  }
}