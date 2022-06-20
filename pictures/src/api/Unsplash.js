import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID yj_WWfCD3DqggA7aR3w5njxw6I0jj6_iE_RjZ-LcYP4'
  }
});
