import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_FPBqvPvKaWxt2krn6wY1uj5HHO0EKnvwR8P4EQF1dzWRf3kkk4WPVvfBm7dlsAPp';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(res => res.data);
}

export async function fetchCatByBreed(breedId) {
  return await axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data);
}
