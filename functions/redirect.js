exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    let pathName = event.path.split('/')[3].split('-')
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: process.env.URL + '/' + pathName[0] + '/' + pathName[1] + '/'
      }
    }
  } else {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://www.cuteanimalplanet.com/'
      }
    }
  }
}