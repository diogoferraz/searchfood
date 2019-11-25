import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: 'Bearer MmATplxs1maqkYUlfelWd0M1GiudmTHqAJvn8r0t-a4e-4ZjLrZMN9toSzdo8fKzafC1bCv575VjxeX2Bbc4dTfNNREY070bAu3M0l3sGsuMtBU_pFXOk5LKEwDZXXYx'
  }
});