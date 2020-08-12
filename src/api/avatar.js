import axios from 'axios';

export const getAvatar = (petType) => {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  let baseUrl = 'http://shibe.online/api/';
  switch(petType) {
    case 'cat':
      baseUrl += 'cats';
      break;
    case 'bird':
      baseUrl += 'birds';
      break;
    default:
      baseUrl += 'shibes';
  }

  return axios({
    method: 'get',
    url: cors + baseUrl,
    params: {
      count: 1,
      urls: true
    }
  })
  .then(res => {
    return res;
  })
  .catch(error => {
    return error
  })
}
