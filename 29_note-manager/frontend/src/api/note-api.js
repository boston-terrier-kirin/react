import axios from 'axios';

const BASE_URL = 'http://localhost:3001/notes';

export class NoteApi {
  static async create(note) {
    return (await axios.post(`${BASE_URL}`, note)).data;
  }

  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data;
  }

  static async fetchById(id) {
    return (await axios.get(`${BASE_URL}/${id}`)).data;
  }

  static async deleteById(id) {
    return (await axios.delete(`${BASE_URL}/${id}`)).data;
  }

  static async updateById(id, note) {
    return (await axios.patch(`${BASE_URL}/${id}`, note)).data;
  }
}
