import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function fetchReviews() {
  const res = await axios.get('/reviews');
  return res.data;
}

// fetchReviews()
//   .then(reviews => console.log(reviews))
//   .catch(error => console.log(error));
// getReviews();

export async function createRequests(request) {
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },

  //     body: JSON.stringify(request),
  //   };

  const res = await axios.post('/requests', request);
  return res.data;
}
