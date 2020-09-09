import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
          'Client-ID wzHq8bvLdtbjs0VNtre_RriWQT2gzI-Q6f-zWqZUHMg'
      }
})
