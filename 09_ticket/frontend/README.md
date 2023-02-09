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

# PrivateRoute

#### App.js

```javascript
<Route path="/ticket/:ticketId" element={<PrivateRoute />}>
  {/* PrivateRoute の Outlet 部分 */}
  <Route path="/ticket/:ticketId" element={<Ticket />} />
</Route>
```

#### PrivateRoute.js

ログインしていない場合は、/login に遷移させる。

```javascript
const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};
```

# 複数の state をまとめ更新

#### Login.jsx

```javascript
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
```

# Spinner

#### Spinner.jsx

```javascript
function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
      <div className="loadingSpinner"></div>
    </div>
  );
}

export default Spinner;
```

#### index.css

```css
.loadingSpinnerContainer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loadingSpinner {
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #000 transparent #555 transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}
```
