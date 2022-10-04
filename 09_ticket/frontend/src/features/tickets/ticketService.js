import axios from 'axios';
const API_URL = '/api/tickets';

const createTicket = async (ticketData, token) => {
  // POINT：Authorization, axios
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL, ticketData, config);

  return res.data;
};

const ticketService = {
  createTicket,
};

export default ticketService;
