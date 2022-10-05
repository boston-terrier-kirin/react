import axios from 'axios';
const API_URL = '/api/tickets';

const getNotes = async (ticketId, token) => {
  // POINT：Authorization, axios
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(`${API_URL}/${ticketId}/notes`, config);

  return res.data;
};

const addNote = async (noteData, token) => {
  // POINT：Authorization, axios
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(
    `${API_URL}/${noteData.ticketId}/notes`,
    { text: noteData.text },
    config
  );

  return res.data;
};

const noteService = {
  getNotes,
  addNote,
};

export default noteService;
