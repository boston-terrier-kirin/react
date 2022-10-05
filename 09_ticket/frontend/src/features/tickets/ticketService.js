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

const getTickets = async (token) => {
  // POINT：Authorization, axios
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(API_URL, config);

  return res.data;
};

const getTicket = async (ticketId, token) => {
  // POINT：Authorization, axios
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(`${API_URL}/${ticketId}`, config);

  return res.data;
};

const closeTicket = async (ticketId, token) => {
  // POINT：Authorization, axios
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.put(
    `${API_URL}/${ticketId}`,
    { status: 'closed' },
    config
  );

  return res.data;
};

const ticketService = {
  getTickets,
  getTicket,
  createTicket,
  closeTicket,
};

export default ticketService;
