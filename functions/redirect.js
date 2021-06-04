exports.handler = async event => {
  if (event.queryStringParameters.fb) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://www.cuteanimalplanet.com/senior-dog-that-lost-sight-due-to-glaucoma-got-puppy-seeing-eye-dog/'
      }
    }
  }
}