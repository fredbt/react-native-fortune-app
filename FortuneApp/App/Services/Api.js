// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'http://ef6087ae.ngrok.io') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const getFortune = () => api.get('')

  return {
    // a list of the API functions from step 2
    getFortune
  }
}

// let's return back our create method as the default.
export default {
  create
}
