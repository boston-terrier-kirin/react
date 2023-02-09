# redux で localstrage から user 情報を復活させる

#### authService.js

```javascript
const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }

  return res.data;
};
```

#### authSlice.js

```javascript
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};
```

# redux で 他の Slice の state を参照する

#### noteSlice.js

```javascript
export const getNotes = createAsyncThunk(
  'notes/getAll',
  async (ticketId, thunkAPI) => {
    try {
      // POINT：他のstateをGETする。
      const token = thunkAPI.getState().auth.user.token;
      return await noteService.getNotes(ticketId, token);
    } catch (error) {
```

# axios で Authorization ヘッダーをつける

#### noteService.js

```javascript
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
```
