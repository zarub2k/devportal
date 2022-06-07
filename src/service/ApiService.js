const get = (url) => {
  console.log('Get method called')
  const apiUrl = import.meta.env.VITE_DEVPORTAL_API_URL + url
  fetch(apiUrl)
  .then(response => response.json())
  .then((data) => { return data } )
}

export default {
  async all() {
    console.log('ApiService.all()')
    return get('/apis')
  } 
}