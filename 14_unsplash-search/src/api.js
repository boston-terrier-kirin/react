import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

const searhImages = async (query) => {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query,
    },
  });

  return res.data.results;
};

export default searhImages;
