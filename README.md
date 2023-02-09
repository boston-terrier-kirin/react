<!-- https://gist.github.com/bradtraversy/547a7bbf35ffba1561706e161a50b05a -->

# React Cheatsheet

## Contents

#### packages

**[`reduxjs/toolkit`](#reduxjs/toolkit)**,
**[`react-router-dom`](#react-router-dom)**,
**[`formik`](#formik)**,
**[`react-bootstrap-icons`](#react-bootstrap-icons)**,
**[`react-icons`](#react-icons)**,
**[`react-toastify`](#react-toastify)**,
**[`react-modal`](#react-modal)**,
**[`react-moment`](#react-moment)**,
**[`css-module`](#css-module)**,
**[`propTypes`](#propTypes)**,
**[`hooks`](#hooks)**,
**[`uuid`](#uuid)**,
**[`bootstrap5`](#bootstrap5)**,
**[`firebase`](#firebase)**,
**[`supabase`](#supabase)**

#### projects

**[`04_github-finder_v2`](https://github.com/boston-terrier-kirin/react/tree/main/04_github-finder_v2)**,
**[`09_ticket`](https://github.com/boston-terrier-kirin/react/tree/main/09_ticket)**,
**[`19_components_with-router`](https://github.com/boston-terrier-kirin/react/tree/main/19_components_with-router)**

## reduxjs/toolkit

- [11_redux-rtk](https://github.com/boston-terrier-kirin/react/tree/main/99_misc/11_redux-rtk)
- [28_dayly-news](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news)
- [29_note-manager](https://github.com/boston-terrier-kirin/react/tree/main/29_note-manager/frontend)

#### [28_dayly-news/postsThunk.js](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news/frontend/src/store/reducers/postsThunk.js)

createAsyncThunk を使っている。

```javascript
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ page = 1, order = 'asc', limit = 10 }, thunkAPI) => {
    try {
      const res = await axios.get(
        `${API_URL}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`
      );

      const data = res.data;

      // thunkAPIで今のステートをGETできる。
      const prevState = thunkAPI.getState().posts;

      return {
        items: [...prevState.articles.items, ...data],
        page,
        end: data.length === 0 ? true : false,
      };
    } catch (err) {
      throw err;
    }
  }
);
```

#### [29_note-manage/Note.js](https://github.com/boston-terrier-kirin/react/blob/main/29_note-manager/frontend/src/pages/note/Note.js)

thunk を使わずに、コンポーネント側で api リクエストしている。

```javascript
const handleSubmit = async (note) => {
  const updatedNote = await NoteApi.updateById(id, note);

  dispatch(notesActions.updateNote(updatedNote));
  navigate('/');
};
```

## react-router-dom

- [99_misc/09_react-router-6](https://github.com/boston-terrier-kirin/react/tree/main/99_misc/09_react-router-6)
- [06_house-marketplace](https://github.com/boston-terrier-kirin/react/tree/main/06_house-marketplace)
- [28_daily-news](https://github.com/boston-terrier-kirin/react/tree/main/28_daily-news)
- [29_note-manager](https://github.com/boston-terrier-kirin/react/tree/main/29_note-manager/frontend)

#### [06_house-marketplace/App.js](https://github.com/boston-terrier-kirin/react/blob/main/06_house-marketplace/src/App.js)

親子関係で PrivateRoute をやっている。

```javascript
<Route path="/profile" element={<PrivateRoute />}>
  {/* ここが、PrivateRouteのoutlet部分 */}
  <Route path="/profile" element={<Profile />} />
</Route>
```

#### [06_house-marketplace/PrivateRoute.js](https://github.com/boston-terrier-kirin/react/blob/main/06_house-marketplace/src/components/PrivateRoute.jsx)

```javascript
const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
```

#### [28_daily-news/App.js](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news/frontend/src/App.js)

```javascript
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RootRoute />}>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="/article/:id" element={<PostsRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
```

#### [28_daily-news/RootRoute.js](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news/frontend/src/routes/RootRoute.js)

```javascript
const RootRoute = () => {
  return (
    <div className="container p-3">
      <ToastContainer />
      <Outlet />
    </div>
  );
};
```

## formik

- [99_misc/12_formik](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/12_formik)

#### [FormThree.js](https://github.com/boston-terrier-kirin/react/blob/main/99_misc/12_formik/src/components/FormThree.js)

##### フォームの初期値をセットする方法

```javascript
const FormThree = () => {
  const [formData, setFormData] = useState({ firstname: '', lastname: '' });

  const formik = useFormik({
    initialValues: formData,
    validate: (values) => {
        ...
    },
    onSubmit: (values) => {
        ...
    },
    enableReinitialize: true, // enableReinitialize=trueにする。
  });

  useEffect(() => {
    // setValuesを使うよりも、ステートでやった方が賢い。
    // formik.setValues({
    //   firstname: 'kirin',
    //   lastname: 'matsumoto',
    // });

    setFormData({
      firstname: 'kirin',
      lastname: 'matsumoto',
    });
  }, []);
```

##### ...formik.getFieldProps('firstname')}で、onChange, onBlur, value, name をまとめて指定できる。

```javascript
<div className="col-md-6 mb-3">
  <label htmlFor="firstname">First name</label>
  <input
    type="text"
    className="form-control"
    id="firstname"
    {...formik.getFieldProps('firstname')}
  />

  {/* touchedを見ないと、firstnameのエラーも、lastnameのエラーも両方表示されてしまう。 */}
  {formik.errors.firstname && formik.touched.firstname && (
    <div>{formik.errors.firstname}</div>
  )}
</div>
```

## react-bootstrap-icons

- [29_note-manager](https://github.com/boston-terrier-kirin/react/blob/main/29_note-manager)

#### [NoteForm.js](https://github.com/boston-terrier-kirin/react/blob/main/29_note-manager/frontend/src/components/note-form/NoteForm.js)

```javascript
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

const NoteForm = () => {
  ...

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && (
          <PencilFill className={style.icon} onClick={onClickEdit} />
        )}
      </div>
      <div className="col-1">
        {onClickDelete && (
          <TrashFill className={style.icon} onClick={onClickDelete} />
        )}
      </div>
    </>
  );
}
```

## react-icons

- [03_github-finder](https://github.com/boston-terrier-kirin/react/blob/main/03_github-finder)

#### [Navbar.js](https://github.com/boston-terrier-kirin/react/blob/main/03_github-finder/src/components/layout/Navbar.js)

```javascript
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
```

## react-toastify

- [99_misc/13_react-toastify](https://github.com/boston-terrier-kirin/react/tree/main/99_misc/13_react-toastify)
- [28_daily-news](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news)

#### [RootRoute.js](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news/frontend/src/routes/RootRoute.js)

```javascript
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootRoute = () => {
  return (
    <div className="container p-3">
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default RootRoute;
```

#### [toast.js](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news/frontend/src/components/utils/toast.js)

```javascript
import { toast } from 'react-toastify';

export const showToast = (type, msg) => {
  if (type === 'SUCCESS') {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return;
  }

  if (type === 'ERROR') {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
```

## react-modal

- [09_ticket](https://github.com/boston-terrier-kirin/react/tree/main/09_ticket)
- [99_misc/14_react-modal](https://github.com/boston-terrier-kirin/react/tree/main/99_misc/14_react-modal)

#### [09_ticket/Ticket.jsx](https://github.com/boston-terrier-kirin/react/blob/main/09_ticket/frontend/src/pages/Ticket.jsx)

```javascript
const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
};

Modal.setAppElement('#root');
```

```javascript
function Ticket() {
  ...

  <Modal
    isOpen={modalOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Add Note"
  >
    <h2>Add Note</h2>
    <button className="btn-close" onClick={closeModal}>
      X
    </button>
    <form onSubmit={onNoteSubmit}>
      <div className="form-group">
        <textarea
          name="noteText"
          id="noteText"
          className="form-control"
          placeholder="Note Text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <button className="btn">Submit</button>
      </div>
    </form>
  </Modal>
```

## react-moment

- [28_daily-news](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news)

#### [Posts.js](https://github.com/boston-terrier-kirin/react/blob/main/28_daily-news/frontend/src/components/Posts.js)

```javascript
import Moment from 'react-moment';
...
<Moment format="DD MMMM">{item.createdAt}</Moment>
```

## css-module

- [29_note-manager](https://github.com/boston-terrier-kirin/react/tree/main/29_note-manager)

コンポーネントごとにフォルダを作っておけば Logo.module.css にする必要はなく、<br>module.css になっていれば OK。

#### [components/logo/Logo.js](https://github.com/boston-terrier-kirin/react/tree/main/29_note-manager/frontend/src/components/logo)

```javascript
import style from './style.module.css';

const Logo = ({ image, title, subtitle, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className={style.container}>
        <img className={style.img} src={image} alt="logo" />
        <div className={style.logo_txt}>{title}</div>
      </div>
      <div className={style.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Logo;
```

#### [components/logo/style.module.css](https://github.com/boston-terrier-kirin/react/tree/main/29_note-manager/frontend/src/components/logo)

```css
.logo_txt {
  font-size: 30px;
  font-weight: 700;
  color: #0d6efd;
}

.container {
  display: flex;
  width: fit-content;
  cursor: pointer;
}

.img {
  height: 40px;
  margin-right: 0.5rem;
}

.subtitle {
  color: #b8b8b8;
  word-wrap: break-word;
}
```

## propTypes

- [01_feedback-app](https://github.com/boston-terrier-kirin/react/tree/main/01_feedback-app)

#### [Header.js](https://github.com/boston-terrier-kirin/react/blob/main/01_feedback-app/src/components/Header.js)

string

```javascript
Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};
```

#### [Button.js](https://github.com/boston-terrier-kirin/react/blob/main/01_feedback-app/src/components/shared/Button.js)

PropTypes.node.isRequired

```javascript
Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
```

#### [FeedbackItem.js](https://github.com/boston-terrier-kirin/react/blob/main/01_feedback-app/src/components/FeedbackItem.js)

PropTypes.object.isRequired

```javascript
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
```

#### [FeedbackList.js](https://github.com/boston-terrier-kirin/react/blob/main/01_feedback-app/src/components/FeedbackList.js)

PropTypes.arrayOf / PropTypes.shape

```javascript
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
```

#### [FeedbackStats.js](https://github.com/boston-terrier-kirin/react/blob/main/01_feedback-app/src/components/FeedbackStats.js)

PropTypes.array.isRequired

```javascript
FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};
```

## hooks

- [05_hooks](https://github.com/boston-terrier-kirin/react/tree/main/05_hooks)
- 06_house-marketplace
  - [useAuthStatus.js](https://github.com/boston-terrier-kirin/react/blob/main/06_house-marketplace/src/hooks/useAuthStatus.js)
- 08_user-management-ts
  - [useAllUsers.ts](https://github.com/boston-terrier-kirin/react/blob/main/08_user-management-ts/src/hooks/useAllUsers.ts)
- 09_ticket
  - [useAuthStatus.js](https://github.com/boston-terrier-kirin/react/blob/main/09_ticket/frontend/src/hooks/useAuthStatus.js)
- 15_react18_vs_react17
  - [useTransition](https://github.com/boston-terrier-kirin/react/blob/main/15_react18_vs_react17/react18/src/components/Transition.tsx)
  - [useDeferredValue](https://github.com/boston-terrier-kirin/react/blob/main/15_react18_vs_react17/react18/src/components/DeferredValue.tsx)
- 22_rtk_async_thunk
  - [useThunk.js](https://github.com/boston-terrier-kirin/react/blob/main/22_rtk_async_thunk/media-client/src/hooks/use-thunk.js)
- [99_misc/01_custom-hooks](https://github.com/boston-terrier-kirin/react/tree/main/99_misc/01_custom-hooks)

## uuid

いつも忘れる。

```
import { v4 as uuid } from 'uuid';
uuid();
```

## bootstrap5

- [28_daily-news](https://github.com/boston-terrier-kirin/react/tree/main/28_daily-news)
- [29_note-manager](https://github.com/boston-terrier-kirin/react/tree/main/29_note-manager/frontend)

## firebase

- [06_house-marketplace](https://github.com/boston-terrier-kirin/react/tree/main/06_house-marketplace)

## supabase

- [23_today-i-learned](https://github.com/boston-terrier-kirin/react/tree/main/23_today-i-learned)
