exports.handler = async event => {
    if (event.queryStringParameters.fb) {
      return {
        statusCode: 301,
        headers: {
          'cache-control': 'public, max-age=0, must-revalidate',
          location: 'https://www.cuteanimalplanet.com/dog-walks-4-blocks-every-day-to-go-visit-his-new-best-friend-this-is-one-adorable-friendship/'
        }
      }
    }
  }